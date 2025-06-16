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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDUSOC7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAEAoiZVv%2FwzD4X1S%2FhgZyFHGOCdbOGswlLA8UtHP69%2BAiEAqkeXfbopzbmhMG7GPkhiRI09xaMZGFCMDELMYvgA9NAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHjceyp9%2BifTE2aaeyrcA%2Brmxq0XY2Ca2R5s8t79yvP8%2Bu1ubVu6zeY8%2BpKSPu52oL8E%2F0XPr4irX9%2BMQzX%2FOQViinHMIfJuCAHT5yzfplEbw8Yp4kQtNTerfr7SSdps1FGdOWowlJOfvIL66nIQVO%2B0SkfJADJZHMPocmeClNvzqfDzXHZHSd7f3fes%2FgxJ8CJJoxzD49QyDnuo8cgjNqmOXqr77D5AmIXu%2BpKQPpmSC3V335XoHKqlHGnG8JXRSTn8rKibCqJ1U%2Bvz1IlrbRWwPsgBlZZPAuDw%2FaDuNq0d64enSClT0RkZBNBifTUhfig5KeHwWFUX6K3wFohZX8XAshBFfUNBKIPkYat7Lkm6OMVhPF3yRtByBb1mkrAO2HHooP6hm6vDgpRlAPS7XEgVpYu7WqwMyyODYNt%2FykyTftZzRlTB8VArdQ2pdLYNOwb7a4gaEufqqESJKa2xtCzV6ZIRErkrKISqJnRdK0tns1poHWXgkWcl5ybPYbFyfWzoUVccl8WFj98rZKgBvI7seHvtQ7jHHe9YA4fQNxmTZU1l%2B5Fs3SNfNARx3QN5HY8qhj%2BzF9%2BEL8w61Q%2BCTHn3QVvlCoHReV7WkHvrCV%2F70XIQxZKH7ubIOZhLWS%2BOnSBHF2y8KSXH%2FDzfMO2NwsIGOqUB%2BmTQcPMHmJ7yos97WASK%2FGEL6s0rAvoRRqz5%2FRgmBi9Gw9%2FTS26USsUqPM5FQk8fWtoKfC%2BBg%2Ft2qHhkYD2P9U2bk2pXq0DTrhZ%2BEUI97v8oOwe1G8H2shPJdlKJfkTw1mvgpORaBLSSeGdSwwE1oq1XJuVPYkxCy4JDPem1d5JEvmfOA8ssgV4UkOXbxlb9Hz4ssESP8OWACpmr%2BG%2FFjnxNnm0J&X-Amz-Signature=54540c2aa82fb8b13673a18477344676531c19e5e35d3f606b8e23bc280e84e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDUSOC7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIAEAoiZVv%2FwzD4X1S%2FhgZyFHGOCdbOGswlLA8UtHP69%2BAiEAqkeXfbopzbmhMG7GPkhiRI09xaMZGFCMDELMYvgA9NAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHjceyp9%2BifTE2aaeyrcA%2Brmxq0XY2Ca2R5s8t79yvP8%2Bu1ubVu6zeY8%2BpKSPu52oL8E%2F0XPr4irX9%2BMQzX%2FOQViinHMIfJuCAHT5yzfplEbw8Yp4kQtNTerfr7SSdps1FGdOWowlJOfvIL66nIQVO%2B0SkfJADJZHMPocmeClNvzqfDzXHZHSd7f3fes%2FgxJ8CJJoxzD49QyDnuo8cgjNqmOXqr77D5AmIXu%2BpKQPpmSC3V335XoHKqlHGnG8JXRSTn8rKibCqJ1U%2Bvz1IlrbRWwPsgBlZZPAuDw%2FaDuNq0d64enSClT0RkZBNBifTUhfig5KeHwWFUX6K3wFohZX8XAshBFfUNBKIPkYat7Lkm6OMVhPF3yRtByBb1mkrAO2HHooP6hm6vDgpRlAPS7XEgVpYu7WqwMyyODYNt%2FykyTftZzRlTB8VArdQ2pdLYNOwb7a4gaEufqqESJKa2xtCzV6ZIRErkrKISqJnRdK0tns1poHWXgkWcl5ybPYbFyfWzoUVccl8WFj98rZKgBvI7seHvtQ7jHHe9YA4fQNxmTZU1l%2B5Fs3SNfNARx3QN5HY8qhj%2BzF9%2BEL8w61Q%2BCTHn3QVvlCoHReV7WkHvrCV%2F70XIQxZKH7ubIOZhLWS%2BOnSBHF2y8KSXH%2FDzfMO2NwsIGOqUB%2BmTQcPMHmJ7yos97WASK%2FGEL6s0rAvoRRqz5%2FRgmBi9Gw9%2FTS26USsUqPM5FQk8fWtoKfC%2BBg%2Ft2qHhkYD2P9U2bk2pXq0DTrhZ%2BEUI97v8oOwe1G8H2shPJdlKJfkTw1mvgpORaBLSSeGdSwwE1oq1XJuVPYkxCy4JDPem1d5JEvmfOA8ssgV4UkOXbxlb9Hz4ssESP8OWACpmr%2BG%2FFjnxNnm0J&X-Amz-Signature=b1c04dd4db4002e5f895397e4982d82fe5fc001df417967acee2c67512d3abe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
