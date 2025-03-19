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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAOO2E7I%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDc5EGxyCcPndbqDph1U340iVpfQtOQCQdDB2iz%2FJF%2BsAIhAPkEWB%2FDec0XzKlhFV4SBWQhNhD9mkhJbhsGgXbxDZgYKv8DCHcQABoMNjM3NDIzMTgzODA1Igyf4AiH0r2TnRKB8gcq3AP8P6rIlEne3fr7U3cUS%2BpJ9XyJlSMhpK6fNRcaMF7CTV9emRFRDxm0A0dV1LpkoOr4HK439iXmWyXQMGxhZiVQPs8aLWVaQrTV4Rd04g%2F8B4aKV3HpxFDmVTX2K%2BTGNVI1ZK3tcbFEhmSSITmztDL8U7pc52%2B%2FFB5g2Z%2BI6bEtptV9mFnrV1Flqu%2BBe%2BiDiO3fByzhecYs99Q5l5EWyXlZdkrFfNgHUZ7kU2DqzU6b%2Bl6Dq5SQ4cijRFtHg0JpDt0Usr4hUfstGX7e1oXK4wud%2BHjbL5iUeQ79Vn%2F5NP1oMvtdvn%2B4SKvPeoUTaO6Xk8G7Q3y1SNkOZY%2BAfVuUZPjwXPhL5xwN0ej1ynKScgFKEfNJwen58Abyn6GlpH8N%2BrSQ%2FXUciTp87b%2BspgzjF6c0ozneYTfnINhiLwn7qYp4CNAf6mTKEIjnoLtWxByBN3Pyi%2FQSTF8KRTRBcsz569iBGV5GIPSAvp4giXxdvCNE6U7zMgr8HxaP0YR0xUrhfCGIT%2F2TOmodaKbq0%2FEAcYbX08cFHprUhAo1USDKVBvWrwIN17Nh%2FUwaN%2BLMKy5InyO9wtzynKaaShA%2BZ8zpXJKRgUt%2BRnfY5AqOAm0jYm7lReegvh0ddYdS7PMFOjDKneu%2BBjqkASAzsc1qSsYBr37WTT%2B1QnW%2Fim2eQd4TpkR0LYXfSR8FRFTOQFOd1Ve9%2FqzPS7duaWFQny6DjVWkCQpwI7cmpbQ7vdKB%2B41Ku7DLJ29XFdxKmQQiJ2BdFLM53GMGKfaXNM%2BvxR13giQB3WyJ5h%2BwZfHiKdRGpo3IFQQid%2F7itQYeq07gsXTuzTMa28Y%2FZrTU8D5yVfpPkFuS62UkfW09ueW80ZU2&X-Amz-Signature=5bf5a4f33c6033be3ce35443b96418baf66e40b2fbfe81fdaf1cfc75817715a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAOO2E7I%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDc5EGxyCcPndbqDph1U340iVpfQtOQCQdDB2iz%2FJF%2BsAIhAPkEWB%2FDec0XzKlhFV4SBWQhNhD9mkhJbhsGgXbxDZgYKv8DCHcQABoMNjM3NDIzMTgzODA1Igyf4AiH0r2TnRKB8gcq3AP8P6rIlEne3fr7U3cUS%2BpJ9XyJlSMhpK6fNRcaMF7CTV9emRFRDxm0A0dV1LpkoOr4HK439iXmWyXQMGxhZiVQPs8aLWVaQrTV4Rd04g%2F8B4aKV3HpxFDmVTX2K%2BTGNVI1ZK3tcbFEhmSSITmztDL8U7pc52%2B%2FFB5g2Z%2BI6bEtptV9mFnrV1Flqu%2BBe%2BiDiO3fByzhecYs99Q5l5EWyXlZdkrFfNgHUZ7kU2DqzU6b%2Bl6Dq5SQ4cijRFtHg0JpDt0Usr4hUfstGX7e1oXK4wud%2BHjbL5iUeQ79Vn%2F5NP1oMvtdvn%2B4SKvPeoUTaO6Xk8G7Q3y1SNkOZY%2BAfVuUZPjwXPhL5xwN0ej1ynKScgFKEfNJwen58Abyn6GlpH8N%2BrSQ%2FXUciTp87b%2BspgzjF6c0ozneYTfnINhiLwn7qYp4CNAf6mTKEIjnoLtWxByBN3Pyi%2FQSTF8KRTRBcsz569iBGV5GIPSAvp4giXxdvCNE6U7zMgr8HxaP0YR0xUrhfCGIT%2F2TOmodaKbq0%2FEAcYbX08cFHprUhAo1USDKVBvWrwIN17Nh%2FUwaN%2BLMKy5InyO9wtzynKaaShA%2BZ8zpXJKRgUt%2BRnfY5AqOAm0jYm7lReegvh0ddYdS7PMFOjDKneu%2BBjqkASAzsc1qSsYBr37WTT%2B1QnW%2Fim2eQd4TpkR0LYXfSR8FRFTOQFOd1Ve9%2FqzPS7duaWFQny6DjVWkCQpwI7cmpbQ7vdKB%2B41Ku7DLJ29XFdxKmQQiJ2BdFLM53GMGKfaXNM%2BvxR13giQB3WyJ5h%2BwZfHiKdRGpo3IFQQid%2F7itQYeq07gsXTuzTMa28Y%2FZrTU8D5yVfpPkFuS62UkfW09ueW80ZU2&X-Amz-Signature=81eb21779da24331df21b827c207526fad6c622beeabef848635ad077201fef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
