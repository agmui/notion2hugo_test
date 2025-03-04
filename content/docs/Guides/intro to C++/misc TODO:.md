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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSB5H4L%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXyJzDy6UGcEOfhfhR0b7MKizTC7kphRJCGWqrs4ClygIhALSz5ZJEllto%2FNFdHEtVpN5SJtiNvliV6V%2FQTj7d5z07KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsReddKiHcInKm%2BN0q3APVaDNxf6jRhseTr43W9Uw%2FJNFsXdLRDgXPUzLJASGKmCHWfoj%2BGCNz8dxGrHhBc4WybaNhsyOIlf2VMTCe1AAFyzI1RxBDr3QnemN2JvpV1%2Bx%2B3BZIHYv%2FJ%2BE0CpT4hOcPC9uBBlMqdMgqn2kmm7I5J71rAT2buw4m3iHiT7xlHJHxuoMw9a3b0UmoIIrc27Rtd46Y7PSL932%2BcdX7qvK9fyu8KRo6l9JlPuVd9lDNUHfl5BQZVQ6T416dGMGv4L8Ao4GrttQihXGqTfJ2WUXMWgCDxCzhFCjhO5O1PqtqwN3n44NDBawGIRc46dzXWGs2J%2FWRCh7LtnqSzoNCXjU%2F6Qc7YbKQWN%2BQqo9Yj1YDAwrMAGCWiX6jiD0002eWwyl8Fut8to%2B%2FUZMcr221HeOShVpphfMriRmsNfHteXEffIpOpdWxZTHdd69Yn5XnfAVNn7BOmkVU3HN5eqhJUDpivmJiofNq%2F9H38ouPFq%2FyC%2BHu2eQBxiNq9JgtgLjiQqosEUdAxfgBmgww6dI023f7z0K78DYyQyT%2FUOu8gzcWFCJBN9r2bXttZJ4HEQ%2FY%2BVdT30IHrPRlWNaWItqj8f9VpaWcX3rcppalRPKV9Ej4Jmtdc0IJufMx1pY2HzCy3J2%2BBjqkASaZUn%2FBlUz3c7ubnEzMitWJScEX1UGP2IGZlxAbbUDTblFyTyrPTfm5%2BJPY6N8zAXxvEScLLLKcUZNNkk9oAhOcL%2BXp2tQopLcWrpkbCBgM3O8MuzLEiqWJXFLThq%2F5jYj%2FeRu92QqQvSJ%2BINmhEKxguX6Bruw90fsk9fQSY28Gx4EOCpJJ2L6wU2VcAAi8Zva8ylOoTf3UAQuU9Jir5B56ms2e&X-Amz-Signature=532f325cb540088531d9c8ebc45f4eb2636f108f1c901df6cc0f120415031cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSB5H4L%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXyJzDy6UGcEOfhfhR0b7MKizTC7kphRJCGWqrs4ClygIhALSz5ZJEllto%2FNFdHEtVpN5SJtiNvliV6V%2FQTj7d5z07KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsReddKiHcInKm%2BN0q3APVaDNxf6jRhseTr43W9Uw%2FJNFsXdLRDgXPUzLJASGKmCHWfoj%2BGCNz8dxGrHhBc4WybaNhsyOIlf2VMTCe1AAFyzI1RxBDr3QnemN2JvpV1%2Bx%2B3BZIHYv%2FJ%2BE0CpT4hOcPC9uBBlMqdMgqn2kmm7I5J71rAT2buw4m3iHiT7xlHJHxuoMw9a3b0UmoIIrc27Rtd46Y7PSL932%2BcdX7qvK9fyu8KRo6l9JlPuVd9lDNUHfl5BQZVQ6T416dGMGv4L8Ao4GrttQihXGqTfJ2WUXMWgCDxCzhFCjhO5O1PqtqwN3n44NDBawGIRc46dzXWGs2J%2FWRCh7LtnqSzoNCXjU%2F6Qc7YbKQWN%2BQqo9Yj1YDAwrMAGCWiX6jiD0002eWwyl8Fut8to%2B%2FUZMcr221HeOShVpphfMriRmsNfHteXEffIpOpdWxZTHdd69Yn5XnfAVNn7BOmkVU3HN5eqhJUDpivmJiofNq%2F9H38ouPFq%2FyC%2BHu2eQBxiNq9JgtgLjiQqosEUdAxfgBmgww6dI023f7z0K78DYyQyT%2FUOu8gzcWFCJBN9r2bXttZJ4HEQ%2FY%2BVdT30IHrPRlWNaWItqj8f9VpaWcX3rcppalRPKV9Ej4Jmtdc0IJufMx1pY2HzCy3J2%2BBjqkASaZUn%2FBlUz3c7ubnEzMitWJScEX1UGP2IGZlxAbbUDTblFyTyrPTfm5%2BJPY6N8zAXxvEScLLLKcUZNNkk9oAhOcL%2BXp2tQopLcWrpkbCBgM3O8MuzLEiqWJXFLThq%2F5jYj%2FeRu92QqQvSJ%2BINmhEKxguX6Bruw90fsk9fQSY28Gx4EOCpJJ2L6wU2VcAAi8Zva8ylOoTf3UAQuU9Jir5B56ms2e&X-Amz-Signature=49756830798900182174ca713f28de009e29e2819ec934b6f40549a5f3544d78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
