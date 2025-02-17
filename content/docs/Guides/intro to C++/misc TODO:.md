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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7EQIDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCOq%2Bs3iSaPekNWZLNXHqFTmq2KfquPCpx3XTbmDQuD5gIhAOgeiDiRakbrpQyFUVMRixkhznJRvfCxRy70YTDaHGQ4Kv8DCGwQABoMNjM3NDIzMTgzODA1IgxoP%2BceXUmlXtTYlucq3APzc0pwaShN3NfG5FiKuTPKVg3qjVv2%2BVSTJFhq7jPVRo1CNI84Ujb50t0QStRfOKQIqmMiT5E6ui%2FGu3%2FPL%2FPZUXXyBZFbxMFzP8S7E6V%2Bk4%2FXT9sYjr0Ul02nNFzL6zRulYcmxnWrRrESPsM6BA%2BxQ64XGHi%2F%2FmzZrh6QO%2FAE0rTRTidZu1vrk5ivxHWA9x5Ig4Cilxrcd5Sqtzk2HXrMn2hiBZNnQhz0JeQxnvqn6eATdSm55dyfhdYszC13RDtsoRzItcsVcRmIXO6D%2BWlQI8LdQhTx7qzxinjdU6sKqsZyrSNAid%2FOJ8IKtPuRgpw22Uoyc%2B6Dv0wK2F3i8jRBUfV5CDiIT1Drwgr7u31JfEcWox1JY5CWGpPkI%2BKDcDXzdvGqBOPrMDCi1qP9LRRd5wWihyJcr%2BtaVH08sLhVlE6pY6aWCRCrFweTNIR0E%2BbXl9wJF9z36WEOZFVn73lAvMUnxAXFxRbeP2YRPAhzf%2FpKJlLOuHN8Dk%2BgI9SlCemiRejvnSlfkwTp2MZ19CK68ojFPQWbly2fh4O8zNISNJNX5qaBRU55MT%2BGvCdRjI6ybxDYsQzeDaMkoPVc4lsrjBolmieQckO8ZtQXUN9F1sW8DSyTi%2B9YKqZutDDXycq9BjqkAdCikLP4%2FpaRnEZXYR7SB%2FtfV8BkJe961wcd4sWaPRJWf4UbOZUVEcubjPz4UO%2B%2BzOfr5OWFDXqOhiaAe03d21crikln15mydVroeH4acyvGcpx3F7RugHP7K5BXpi2q0ywhV1iKpO9oEvOb9rrFHqKOJFIrdgVs5dHFbFnEwLaDfjL7UECbkKIsxiKHS%2Bzhatgw1nRHxumDg3SfQVa%2Bj%2FK5TZJ0&X-Amz-Signature=78615d79f178a3d4a1a20c5b3690b66c022dd676242c08c88d1c5df4317bd723&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7EQIDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCOq%2Bs3iSaPekNWZLNXHqFTmq2KfquPCpx3XTbmDQuD5gIhAOgeiDiRakbrpQyFUVMRixkhznJRvfCxRy70YTDaHGQ4Kv8DCGwQABoMNjM3NDIzMTgzODA1IgxoP%2BceXUmlXtTYlucq3APzc0pwaShN3NfG5FiKuTPKVg3qjVv2%2BVSTJFhq7jPVRo1CNI84Ujb50t0QStRfOKQIqmMiT5E6ui%2FGu3%2FPL%2FPZUXXyBZFbxMFzP8S7E6V%2Bk4%2FXT9sYjr0Ul02nNFzL6zRulYcmxnWrRrESPsM6BA%2BxQ64XGHi%2F%2FmzZrh6QO%2FAE0rTRTidZu1vrk5ivxHWA9x5Ig4Cilxrcd5Sqtzk2HXrMn2hiBZNnQhz0JeQxnvqn6eATdSm55dyfhdYszC13RDtsoRzItcsVcRmIXO6D%2BWlQI8LdQhTx7qzxinjdU6sKqsZyrSNAid%2FOJ8IKtPuRgpw22Uoyc%2B6Dv0wK2F3i8jRBUfV5CDiIT1Drwgr7u31JfEcWox1JY5CWGpPkI%2BKDcDXzdvGqBOPrMDCi1qP9LRRd5wWihyJcr%2BtaVH08sLhVlE6pY6aWCRCrFweTNIR0E%2BbXl9wJF9z36WEOZFVn73lAvMUnxAXFxRbeP2YRPAhzf%2FpKJlLOuHN8Dk%2BgI9SlCemiRejvnSlfkwTp2MZ19CK68ojFPQWbly2fh4O8zNISNJNX5qaBRU55MT%2BGvCdRjI6ybxDYsQzeDaMkoPVc4lsrjBolmieQckO8ZtQXUN9F1sW8DSyTi%2B9YKqZutDDXycq9BjqkAdCikLP4%2FpaRnEZXYR7SB%2FtfV8BkJe961wcd4sWaPRJWf4UbOZUVEcubjPz4UO%2B%2BzOfr5OWFDXqOhiaAe03d21crikln15mydVroeH4acyvGcpx3F7RugHP7K5BXpi2q0ywhV1iKpO9oEvOb9rrFHqKOJFIrdgVs5dHFbFnEwLaDfjL7UECbkKIsxiKHS%2Bzhatgw1nRHxumDg3SfQVa%2Bj%2FK5TZJ0&X-Amz-Signature=31cdd9d828a18ea0b7278e3cbde5326c05576bea1f84dfb10142835d6a07d613&X-Amz-SignedHeaders=host&x-id=GetObject)

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
