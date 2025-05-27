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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2SJ6SE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3IV9QPUnxCg66f%2BarbQ%2BXIk1xOmVCZOw3NBurDAPWyAiBefedDl3XWTCljC4shIAvhCo%2BeZxnGlawqbDybPagYrSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLja%2B9dANyULPdPOZKtwDx021mBW2FmGXOfUiUf053fARS8cKbvYU0tec%2FFhUjlg%2FE%2FjHesqF43sC5dvmZcwmoVQXHQLGi5KVYjAXcry2iKR7PYjWYS75ofZV6kpJ1R5h8NyntXwZH%2BwW3Rjj4Mk1x9Gz%2BpVlW4Hw96lZq1P3qdWjPULw1Rdd2sDr77vnSgkX7uHjSlfny5KuYoKRWXFs84EhYN6GWe0kN8MnmT9krDmOA1tPRHOWlwIkHt0ms%2FDoC0dPg1OX601PEQNHSNAuet9sMrmQ85ajihRdKORgOH3lf5n7ymFuuWVR6js1fFihBW8CPpYz36ggm4zQUmdcEl2HTbMDP9Rog4CJ8WQlO1YJN4Q4FXEsJgv2IESk0RD2SEnEjjHgnScAfKzc1oGHzsdhxXdTE%2F140C%2B2asypEhCHxc3c%2BIz%2FDsyusz2t9UBovxKv0GgnoY1s4iEfCNfDNxVIp4kGrkdBhEsRRJ613q38eTB%2B7J0pa%2F4llB%2FmxOV22CjQUC%2B4bGx%2B7TMwNCiKM4YfVDckGxH7G%2Bd1ZDP6tOn91CEZwffaImqL8GObl4I6pkTym%2F8%2FIpK9QtJRgaEc3gwmrSg4s1qVbBr4%2Fx%2BukxZtQKtWS2bJkp6EpwfGAb0hf6BfFNal75lLKJ4wkavWwQY6pgFzEJVdclZkcIswwzr5IAOvn6v5yiufxeWjsC5A0hvXlpw4wphD404nVYsNoJyvIPqfw3t%2BEMY2M1JZcF0DzSoA4gk60hrNUBsb%2FeB6jIBcsKQdW8DRkdpgNRciY8rPDZ5SWzx23X9HvBiSIvbqLdI7%2FAEXltiqEnu5u27X%2FNJZ097ATZUiep%2Bd2EZzikQ0vcLwOmivJsP9e%2F%2B6sXYeyAFFNGyF%2Bs07&X-Amz-Signature=5f6a8ab3623cfa25602476991a6ddceb9f3e6193dd7be434b17f6cf1323250ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2SJ6SE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3IV9QPUnxCg66f%2BarbQ%2BXIk1xOmVCZOw3NBurDAPWyAiBefedDl3XWTCljC4shIAvhCo%2BeZxnGlawqbDybPagYrSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLja%2B9dANyULPdPOZKtwDx021mBW2FmGXOfUiUf053fARS8cKbvYU0tec%2FFhUjlg%2FE%2FjHesqF43sC5dvmZcwmoVQXHQLGi5KVYjAXcry2iKR7PYjWYS75ofZV6kpJ1R5h8NyntXwZH%2BwW3Rjj4Mk1x9Gz%2BpVlW4Hw96lZq1P3qdWjPULw1Rdd2sDr77vnSgkX7uHjSlfny5KuYoKRWXFs84EhYN6GWe0kN8MnmT9krDmOA1tPRHOWlwIkHt0ms%2FDoC0dPg1OX601PEQNHSNAuet9sMrmQ85ajihRdKORgOH3lf5n7ymFuuWVR6js1fFihBW8CPpYz36ggm4zQUmdcEl2HTbMDP9Rog4CJ8WQlO1YJN4Q4FXEsJgv2IESk0RD2SEnEjjHgnScAfKzc1oGHzsdhxXdTE%2F140C%2B2asypEhCHxc3c%2BIz%2FDsyusz2t9UBovxKv0GgnoY1s4iEfCNfDNxVIp4kGrkdBhEsRRJ613q38eTB%2B7J0pa%2F4llB%2FmxOV22CjQUC%2B4bGx%2B7TMwNCiKM4YfVDckGxH7G%2Bd1ZDP6tOn91CEZwffaImqL8GObl4I6pkTym%2F8%2FIpK9QtJRgaEc3gwmrSg4s1qVbBr4%2Fx%2BukxZtQKtWS2bJkp6EpwfGAb0hf6BfFNal75lLKJ4wkavWwQY6pgFzEJVdclZkcIswwzr5IAOvn6v5yiufxeWjsC5A0hvXlpw4wphD404nVYsNoJyvIPqfw3t%2BEMY2M1JZcF0DzSoA4gk60hrNUBsb%2FeB6jIBcsKQdW8DRkdpgNRciY8rPDZ5SWzx23X9HvBiSIvbqLdI7%2FAEXltiqEnu5u27X%2FNJZ097ATZUiep%2Bd2EZzikQ0vcLwOmivJsP9e%2F%2B6sXYeyAFFNGyF%2Bs07&X-Amz-Signature=5637c7b091bde62241d70e6ca765877aee2b06cc9f4b4e4d907c4f1265cea8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
