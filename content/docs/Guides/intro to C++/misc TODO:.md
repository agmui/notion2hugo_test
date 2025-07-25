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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUD372QN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCNhCLQDColnU9H31mHPjLf6zWwS9YAb7lPKp%2ByhcJOzAIhAPYNtl1fflV5lRnr3gIagsi3Tbl23iNYnWFUZqXoVgDiKv8DCEgQABoMNjM3NDIzMTgzODA1Igzdkr7M8r4ozReSnxMq3AMgiwy%2FHGGmJIG%2FGfoZjJNzVIVf%2FWKj%2F3sk%2BdYDGQFwdMTewufiN9ETf%2BQPqoAysHILhboSVq%2BLcMyQh3oJ4F%2BcB7KJtci%2F9uraEDV8b4CC%2FczBmoegObD5N68YJQXWmiVyhGVOTha4t%2BD50HWeVw2c0uPE7p6lvJogPVcWRgveP562zC%2BlgEn8LUPH01MLLlwzyj2%2Fz2Xn%2BSwk1DFfSfSgGkl8yqBBWNwIt127uqFhp0N%2BnI%2BwmHNuhPPYv%2F1ucUvGU6ra6HqJJzwFjCDmweBsC56XJJ5d9A1ihfGnXap6tIvluPAAFkGmNPOsfDK6w%2FHzKzs2DBCR11aT7vqGBugzfKjCHkbqUAZwj3HdhASyupNjhE5XWaxlDKRssxTyRrJqkzDMN5V9NaijAf8NuOPDkAuXdyRj9YlTqEcFH6jciINpt0PiAe1OBZqvMngvmPu08pQP9fkOn9bWtiQUolXnfKhOuEZ2zSwUT6285iaGz%2BBw%2BM%2FavLiLjk5nc5JvrX4qWl9aWg5DY3lE3kVRrZ5tSEmvKK%2BcA0PCFQDqv9cmehZipg%2B3RhrPS244ilkrIu9MaxbQ19g0x9URdIBzwgaaFzz6kFIjwan5yWAbtDdgGNN%2F6xnC2eHvbN7sjzCpvY7EBjqkAT8Abu%2B0lJCCaBld96b16SCpgLh4y0%2BU%2BtHeTGEa5WLdXUsHK7T7tXDauz3H6NBXd%2BjPyvuW2BiCdEfXhvGLOqJnYwiJB5W6hrgMdmNzzx1%2BjCzh%2B3J10HinYhwnDFiVUhrgz4F5z4SVSRLgJWNbYhT3q7EgO3n9LxFqKFnsY9EVCidBVMu2TxiyHSh%2BEKKrnJ8gATDOo05JhpmiU4599qFp9rZt&X-Amz-Signature=d090df768c6266b8be8db702aaa93085bc5c1ff5803dd0260811b689f99f0ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUD372QN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCNhCLQDColnU9H31mHPjLf6zWwS9YAb7lPKp%2ByhcJOzAIhAPYNtl1fflV5lRnr3gIagsi3Tbl23iNYnWFUZqXoVgDiKv8DCEgQABoMNjM3NDIzMTgzODA1Igzdkr7M8r4ozReSnxMq3AMgiwy%2FHGGmJIG%2FGfoZjJNzVIVf%2FWKj%2F3sk%2BdYDGQFwdMTewufiN9ETf%2BQPqoAysHILhboSVq%2BLcMyQh3oJ4F%2BcB7KJtci%2F9uraEDV8b4CC%2FczBmoegObD5N68YJQXWmiVyhGVOTha4t%2BD50HWeVw2c0uPE7p6lvJogPVcWRgveP562zC%2BlgEn8LUPH01MLLlwzyj2%2Fz2Xn%2BSwk1DFfSfSgGkl8yqBBWNwIt127uqFhp0N%2BnI%2BwmHNuhPPYv%2F1ucUvGU6ra6HqJJzwFjCDmweBsC56XJJ5d9A1ihfGnXap6tIvluPAAFkGmNPOsfDK6w%2FHzKzs2DBCR11aT7vqGBugzfKjCHkbqUAZwj3HdhASyupNjhE5XWaxlDKRssxTyRrJqkzDMN5V9NaijAf8NuOPDkAuXdyRj9YlTqEcFH6jciINpt0PiAe1OBZqvMngvmPu08pQP9fkOn9bWtiQUolXnfKhOuEZ2zSwUT6285iaGz%2BBw%2BM%2FavLiLjk5nc5JvrX4qWl9aWg5DY3lE3kVRrZ5tSEmvKK%2BcA0PCFQDqv9cmehZipg%2B3RhrPS244ilkrIu9MaxbQ19g0x9URdIBzwgaaFzz6kFIjwan5yWAbtDdgGNN%2F6xnC2eHvbN7sjzCpvY7EBjqkAT8Abu%2B0lJCCaBld96b16SCpgLh4y0%2BU%2BtHeTGEa5WLdXUsHK7T7tXDauz3H6NBXd%2BjPyvuW2BiCdEfXhvGLOqJnYwiJB5W6hrgMdmNzzx1%2BjCzh%2B3J10HinYhwnDFiVUhrgz4F5z4SVSRLgJWNbYhT3q7EgO3n9LxFqKFnsY9EVCidBVMu2TxiyHSh%2BEKKrnJ8gATDOo05JhpmiU4599qFp9rZt&X-Amz-Signature=47a966cf0df712b2a053df529e0219fe72cc485709015e754901a7425de728cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
