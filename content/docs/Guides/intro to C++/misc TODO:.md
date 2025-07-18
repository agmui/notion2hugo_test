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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTXKPM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDyYag97%2F%2Be1nPnkEuZ1Bf2tP6f29VyBnoC3vGdAjpyFAiAxhk%2BieDen13Sg3eFfcFwSeAx2QCDSaQ9DtqvRL2uHbCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk16cfVcpa79ZL2%2BYKtwDaYEv2aYB1fHBUDe0rLhOkr2QtjMOD1aF0c0dW2WzMRsudsI7twhypVAveQuAf8ZgOLsWJ66jUo3Y0r07DrUM5mtVhNBEbmZq5gtT0jLGIQD4zcPCNFRDawiKT48vLOxK7qvPPfN1hGEgxs2UmKC8Hdhu8J9DEPP3NAfb6R2BUBC%2FJDwUmOQktNmvGsjloTembeLSS28zQLlBjadxtk60ql%2F0ZNmi6wYnoi2zbvHdYHc97g9QfQaF2Sfm%2BYVJcmc5%2FgmwFD8XPhsbW8MMosvnIyjB0qxJJwyfcmzMsfMHg51Wd9SKRGTJqu59A8AaXI63Rfse2deq12yWE5gl4OyIMJg0k4s1ndYXJFtZlTK%2Bxqq16oxOZfpTIQ9R2paTrTx28k8P3YIJ3%2FQZlMfLh1GV2%2B1z%2BUZuHbLFjXYjDZisE0T4z5H3ucB5z%2Bve5dnEa%2Fzl92QqKH%2FlBBuyN97CKy%2BEZvysc6bSM1IPJFIsnnLrAZf6l1ccF7ll7VLOr7S%2FRjxrXXdyqbwDy%2FgqAuZcDNEvBKA6f%2B%2B3yXTaYONOlUzu4%2BHld8o9SURgdVxQtI79TM3TotYT69M7ZDtEeucq53PX6FwD%2B9S%2FdzxhaEIN8niJJXLAMGomIOt1%2BhY3l44wrfvlwwY6pgHD4zt8Nez6FSYD5ZiOXRmxWtOiKs2j%2BXG8toqnzlQ0QDXLM78rCPN2lQt2l1iA32OVh7k9%2Ft1ZXZuWx0sQlNepXrZqMIrbCVqDDf2BPzeOvnptcrq9pffpkgMC8YxZYEmp9chAsSThjGO6VpUXnlbm7FncfmZTBcWmOoZ%2BAnrSrxS6RQ8LtPmPbb3yl7rf9Pi5dwT1lFQU1c8%2Fpnz5QM3qfYrKEz8a&X-Amz-Signature=d46ab511269ce80140298ee899e232c97457344b80bf21c374a2a713f43da3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTXKPM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDyYag97%2F%2Be1nPnkEuZ1Bf2tP6f29VyBnoC3vGdAjpyFAiAxhk%2BieDen13Sg3eFfcFwSeAx2QCDSaQ9DtqvRL2uHbCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk16cfVcpa79ZL2%2BYKtwDaYEv2aYB1fHBUDe0rLhOkr2QtjMOD1aF0c0dW2WzMRsudsI7twhypVAveQuAf8ZgOLsWJ66jUo3Y0r07DrUM5mtVhNBEbmZq5gtT0jLGIQD4zcPCNFRDawiKT48vLOxK7qvPPfN1hGEgxs2UmKC8Hdhu8J9DEPP3NAfb6R2BUBC%2FJDwUmOQktNmvGsjloTembeLSS28zQLlBjadxtk60ql%2F0ZNmi6wYnoi2zbvHdYHc97g9QfQaF2Sfm%2BYVJcmc5%2FgmwFD8XPhsbW8MMosvnIyjB0qxJJwyfcmzMsfMHg51Wd9SKRGTJqu59A8AaXI63Rfse2deq12yWE5gl4OyIMJg0k4s1ndYXJFtZlTK%2Bxqq16oxOZfpTIQ9R2paTrTx28k8P3YIJ3%2FQZlMfLh1GV2%2B1z%2BUZuHbLFjXYjDZisE0T4z5H3ucB5z%2Bve5dnEa%2Fzl92QqKH%2FlBBuyN97CKy%2BEZvysc6bSM1IPJFIsnnLrAZf6l1ccF7ll7VLOr7S%2FRjxrXXdyqbwDy%2FgqAuZcDNEvBKA6f%2B%2B3yXTaYONOlUzu4%2BHld8o9SURgdVxQtI79TM3TotYT69M7ZDtEeucq53PX6FwD%2B9S%2FdzxhaEIN8niJJXLAMGomIOt1%2BhY3l44wrfvlwwY6pgHD4zt8Nez6FSYD5ZiOXRmxWtOiKs2j%2BXG8toqnzlQ0QDXLM78rCPN2lQt2l1iA32OVh7k9%2Ft1ZXZuWx0sQlNepXrZqMIrbCVqDDf2BPzeOvnptcrq9pffpkgMC8YxZYEmp9chAsSThjGO6VpUXnlbm7FncfmZTBcWmOoZ%2BAnrSrxS6RQ8LtPmPbb3yl7rf9Pi5dwT1lFQU1c8%2Fpnz5QM3qfYrKEz8a&X-Amz-Signature=453e7001b607f2374268a803b0119344341d8d69dcb699e6d1d1e1e5701122af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
