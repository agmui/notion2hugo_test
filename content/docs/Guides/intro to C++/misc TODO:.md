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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZENLEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCNN%2FlNS56Q0sKklxVv9NuAyzqMRhBBOMYnHdLDBfPxTwIgcdYicKaA1oUmSQnYQy%2BVgtGP9uluHhQi6CFCyVg9tVAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDD7wyWdAuy4Y1qSzGSrcAydOOpt8KJVjZtJ04GBSotYTd3QRQH7Swzue%2F9XIuxLmXO7D9psFF2UBAEHTAVphShbtkN3tYkXemm1DhzCYurftYLuDNYk%2BbaMHA6%2BUs%2F6aTXfIZkKzQ2JlekvCHfwgTGz0UNMuG4xP5FdK9WKDJndDcyK1Oi5CuptZQYxSLk97ARLsVOMh0l%2FD%2Byq%2F%2BFWE%2FE5wOeZmOr4se%2Bsbp%2F8rWIW3wd1o8XJJMdn%2BX9HqdBoTVhZGhfMgBCDbD%2B3sYZEZvkbhT4j0TExxzmk15rbap1qBVa0qDcIRVOQArOKPmV9vgEo2hSakqbbbaJ0%2BbAf8inkDhOBQTGQYAWYVYnFgURsLJusVYKgyiMUM%2B2Q0os8cWhtp1fQUrg1ubghruj9t7%2BRwumIszLRVYqMGl8bxYPU%2FepVb2%2FSxMTwsY6SemXAUllwNkKVmxXR1bnEyBIsBhATnUF%2FOEEJXzmFvR%2BSfoQRojF%2FYZv%2F1q%2FZ4GayYuUouW8DoCghC4vekfsySQw4mMGKjEbTePMXFEayBA6WnUBictqBw9lRp%2BcEsvuUkeLKmnp0KWt5dmuFjwcUc5ZzP1nYEwPrmiUMnw%2Bq5qzgzJMUsiipOeARKO2Gzc%2BfgCuUx1I1bpEIlSdtmV7hyMNv22sMGOqUBFx%2B8GjzpcETUDcD72KOlgDux7FtCo%2B1TPwsUogXZ%2F8X7Xq%2BRJBA0L8XucaB%2F6uuKji19EzNEtA%2BSg3%2BHxBT2IMHcHDWoNAiuBVXXdN5U33%2B1UvrNXWupIyLcswyXLnv8iSpt9JuK3e71M9O3wOAPVbwIy9qHH8n5jtReRicHxiiqTLTCGpxON8s%2B5plzcCvnY1GtsHIyt7NyFU%2BgKDxlOGugZkzn&X-Amz-Signature=81dc3339c4e3e433a82448a9afa8a71b2b7ee402cca9b4ad8132af4fad4c39c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZENLEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCNN%2FlNS56Q0sKklxVv9NuAyzqMRhBBOMYnHdLDBfPxTwIgcdYicKaA1oUmSQnYQy%2BVgtGP9uluHhQi6CFCyVg9tVAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDD7wyWdAuy4Y1qSzGSrcAydOOpt8KJVjZtJ04GBSotYTd3QRQH7Swzue%2F9XIuxLmXO7D9psFF2UBAEHTAVphShbtkN3tYkXemm1DhzCYurftYLuDNYk%2BbaMHA6%2BUs%2F6aTXfIZkKzQ2JlekvCHfwgTGz0UNMuG4xP5FdK9WKDJndDcyK1Oi5CuptZQYxSLk97ARLsVOMh0l%2FD%2Byq%2F%2BFWE%2FE5wOeZmOr4se%2Bsbp%2F8rWIW3wd1o8XJJMdn%2BX9HqdBoTVhZGhfMgBCDbD%2B3sYZEZvkbhT4j0TExxzmk15rbap1qBVa0qDcIRVOQArOKPmV9vgEo2hSakqbbbaJ0%2BbAf8inkDhOBQTGQYAWYVYnFgURsLJusVYKgyiMUM%2B2Q0os8cWhtp1fQUrg1ubghruj9t7%2BRwumIszLRVYqMGl8bxYPU%2FepVb2%2FSxMTwsY6SemXAUllwNkKVmxXR1bnEyBIsBhATnUF%2FOEEJXzmFvR%2BSfoQRojF%2FYZv%2F1q%2FZ4GayYuUouW8DoCghC4vekfsySQw4mMGKjEbTePMXFEayBA6WnUBictqBw9lRp%2BcEsvuUkeLKmnp0KWt5dmuFjwcUc5ZzP1nYEwPrmiUMnw%2Bq5qzgzJMUsiipOeARKO2Gzc%2BfgCuUx1I1bpEIlSdtmV7hyMNv22sMGOqUBFx%2B8GjzpcETUDcD72KOlgDux7FtCo%2B1TPwsUogXZ%2F8X7Xq%2BRJBA0L8XucaB%2F6uuKji19EzNEtA%2BSg3%2BHxBT2IMHcHDWoNAiuBVXXdN5U33%2B1UvrNXWupIyLcswyXLnv8iSpt9JuK3e71M9O3wOAPVbwIy9qHH8n5jtReRicHxiiqTLTCGpxON8s%2B5plzcCvnY1GtsHIyt7NyFU%2BgKDxlOGugZkzn&X-Amz-Signature=58c95733cb299018f84f268c1e1f4738cbd836df628c109ae514026b002d9f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
