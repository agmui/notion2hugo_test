---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7VIFW4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDXKWq4Wfq4%2BAFgsJxTY0GB%2B5xOxc27Exh7V3qD%2BeQVvAiEA6NG4fmn4HvYUvsFnAVWYkYyeOFxEUh2B7aBw07%2B94ekq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC%2F4w%2Br4Iuv6pTpbGSrcA3aVtgDh%2FMy%2BVDHhecJ7fnRw2O8wCewY0SMvP0J0LQGDS6uGiFRXtaiEOx5eORs8O6F8vB%2FkYakJLgutUhIEEbFLchekI4S6pXu9sgZbHvFW3RaG5otDsjPN3LOm9TibgsH%2F7fsMuRI2QSP4xY15Xm66wq%2BVkcU2MbH3%2BvHg8SFxKSruPS1I5zs14R%2F73r4pI5xTpS9B0zvA6W6MMm%2F5KfLbga2O2Kpr6ucvYuZPZdTd2vDvQ1M%2B20x5Pxopl4KvSew6uBGq1cS0VjrldCTJMQjJdOhLClf3MG4mTjSyw%2B9DAfq38XWqxA5rH084j1vV2kfirPgn78jRANDSh%2BVF2wdlsVVNjmXr2i%2BbAJUQxEeWvYGP51NUDVOSp07oka7%2Bg187ENm3TTKScATYSC%2FIoox4krOYa1X%2F5i6lsKuCt9134MP5AZNuaL9aRwxVH2y2dGFcQgJ9gIOlLsSS541ilpYITqH1qivZT7blvjU0crHVkG401ZoVyciG0RnFSiLp%2FAZixLJpLt8OZ2qw0AQsj9GgOSPNydjpdljSCiSqXYmF8th3iDeVo9A3YCSxqQZlta8hgk4jTOdZhy%2FU6%2BhnPH56IXFn8YYvCBVAXciDx1c6e59jmv2VsxyAvF2jMPHaxsQGOqUB3qGdBJ%2FjkisfA4H9l%2FRzkhtpKJ8qT5llx6nz8hEj084ZcwnrcyA3cApPhgw7IS%2FVDEhjROPzGFgPlDWyFZqZPZHR9Kli64dRU%2FcY9csbHXwbaJzO3zEagof2pm%2Bv4OxYMS%2BsP9yktbSuWb6JSBH03i9POS0k7K3F6AFXKY%2Fh4EdK8iNwml822%2FQkLFmd8wIQyzgCCnkelExGrsbxhgpnAkWi0dZ%2F&X-Amz-Signature=2c5a863bf0ebeeebc142b92dcc08f1f25c65ebda1d3a3094129feb5ccfc33ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7VIFW4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDXKWq4Wfq4%2BAFgsJxTY0GB%2B5xOxc27Exh7V3qD%2BeQVvAiEA6NG4fmn4HvYUvsFnAVWYkYyeOFxEUh2B7aBw07%2B94ekq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDC%2F4w%2Br4Iuv6pTpbGSrcA3aVtgDh%2FMy%2BVDHhecJ7fnRw2O8wCewY0SMvP0J0LQGDS6uGiFRXtaiEOx5eORs8O6F8vB%2FkYakJLgutUhIEEbFLchekI4S6pXu9sgZbHvFW3RaG5otDsjPN3LOm9TibgsH%2F7fsMuRI2QSP4xY15Xm66wq%2BVkcU2MbH3%2BvHg8SFxKSruPS1I5zs14R%2F73r4pI5xTpS9B0zvA6W6MMm%2F5KfLbga2O2Kpr6ucvYuZPZdTd2vDvQ1M%2B20x5Pxopl4KvSew6uBGq1cS0VjrldCTJMQjJdOhLClf3MG4mTjSyw%2B9DAfq38XWqxA5rH084j1vV2kfirPgn78jRANDSh%2BVF2wdlsVVNjmXr2i%2BbAJUQxEeWvYGP51NUDVOSp07oka7%2Bg187ENm3TTKScATYSC%2FIoox4krOYa1X%2F5i6lsKuCt9134MP5AZNuaL9aRwxVH2y2dGFcQgJ9gIOlLsSS541ilpYITqH1qivZT7blvjU0crHVkG401ZoVyciG0RnFSiLp%2FAZixLJpLt8OZ2qw0AQsj9GgOSPNydjpdljSCiSqXYmF8th3iDeVo9A3YCSxqQZlta8hgk4jTOdZhy%2FU6%2BhnPH56IXFn8YYvCBVAXciDx1c6e59jmv2VsxyAvF2jMPHaxsQGOqUB3qGdBJ%2FjkisfA4H9l%2FRzkhtpKJ8qT5llx6nz8hEj084ZcwnrcyA3cApPhgw7IS%2FVDEhjROPzGFgPlDWyFZqZPZHR9Kli64dRU%2FcY9csbHXwbaJzO3zEagof2pm%2Bv4OxYMS%2BsP9yktbSuWb6JSBH03i9POS0k7K3F6AFXKY%2Fh4EdK8iNwml822%2FQkLFmd8wIQyzgCCnkelExGrsbxhgpnAkWi0dZ%2F&X-Amz-Signature=545c6f0fcd9ad0a6b453c6b600e527a4f3f76344b09775e991c88a9e302af892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
