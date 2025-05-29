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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMG4YOCT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFc8ef6jfDYL%2BWlueI6iA0zVpfIITcJ81w9BGVvNUDuAIgc%2BLQuPuIARYbZfB1tGPywoZjPzWIRwjsSLX0vJ3N1DAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHakEp%2FpFwKECTQQrircA%2Fu%2BZh2z0Wsbesvvvu6a2XmcU3ZVD4n6Wc6IbEAo4Z9UZk8bL6LOeqWUKBRsyu4BNkUxatgNQWCLHIq4Lcfz2kh6DNt0pLfiafxoBoeaPCanjfRDcP5sLjCg9l%2BsFbxggft2wiyNIpFiboEL4tqpK0Tk3cx0EBsalKRqMgK0mt2XPua%2F5pyCwvwwvLJcncsyvqfAIlSVIsh79X3dH2cqrMaJlyhAAiEX%2BUlbBgWtlyYJuTBiTP36SEJj090%2FXUvwKIkW3LdZaaMUqv%2Fog9IhlgzSA3M5fpUuMgri2OoW%2FaSo0FN9zOqdJC6C26APWNQ6EvqBQaO1e5dawXSPVmHNMeg2SH%2FuBIuQk7xhS8WoU0RV93f3nh8yTQAGN90moSfCB2bBCgJPxHLOcN0tvUuVLlm6gMiYIWSGHDRBdy050SttW%2BgbohDiGBMYk34EmWx0NJOzn6D2wDoGlD9O5p5mdFm6srMhjpm%2BZsM0H2qmPrUj30vV3ZKmySIwgnB%2BJDFTLQ1V2FfuzmMjmDefJumJlCOObLETlFxwfB3jrpEfiSHTekwWWLyZPt%2BcDSWzC7WtkK62I5GVcUxic1X1mK3t84VzLH2fOd1xN3CG2jzwuTyEpMW5%2BNSK6r%2FPcr%2FhMOSy48EGOqUBYuxhfNdDthOJCCnk8Xre2ye7fTiRC8CvBdaHnvs%2BJO7Mus00s26q9HbfbTs6MqEEWSV2ZqPzZtYuYX%2FOy%2FpXSODzdJYaWJttg84dQeKGVMWQbuHpdh%2B1dj%2FNL3%2FTaEINNTor2O927bN2xysCbeDQRBoLHcCRPljqz4C%2Bm7L%2BZxsaHYuCv2eSUWL%2FhNmGRgCezo%2BgrrwR9Fr3HhG77tYR1bUBI5N8&X-Amz-Signature=32951239d6eaca2919eaab5477433c6de87eb045bc296bac728114c980ad0635&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMG4YOCT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFc8ef6jfDYL%2BWlueI6iA0zVpfIITcJ81w9BGVvNUDuAIgc%2BLQuPuIARYbZfB1tGPywoZjPzWIRwjsSLX0vJ3N1DAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHakEp%2FpFwKECTQQrircA%2Fu%2BZh2z0Wsbesvvvu6a2XmcU3ZVD4n6Wc6IbEAo4Z9UZk8bL6LOeqWUKBRsyu4BNkUxatgNQWCLHIq4Lcfz2kh6DNt0pLfiafxoBoeaPCanjfRDcP5sLjCg9l%2BsFbxggft2wiyNIpFiboEL4tqpK0Tk3cx0EBsalKRqMgK0mt2XPua%2F5pyCwvwwvLJcncsyvqfAIlSVIsh79X3dH2cqrMaJlyhAAiEX%2BUlbBgWtlyYJuTBiTP36SEJj090%2FXUvwKIkW3LdZaaMUqv%2Fog9IhlgzSA3M5fpUuMgri2OoW%2FaSo0FN9zOqdJC6C26APWNQ6EvqBQaO1e5dawXSPVmHNMeg2SH%2FuBIuQk7xhS8WoU0RV93f3nh8yTQAGN90moSfCB2bBCgJPxHLOcN0tvUuVLlm6gMiYIWSGHDRBdy050SttW%2BgbohDiGBMYk34EmWx0NJOzn6D2wDoGlD9O5p5mdFm6srMhjpm%2BZsM0H2qmPrUj30vV3ZKmySIwgnB%2BJDFTLQ1V2FfuzmMjmDefJumJlCOObLETlFxwfB3jrpEfiSHTekwWWLyZPt%2BcDSWzC7WtkK62I5GVcUxic1X1mK3t84VzLH2fOd1xN3CG2jzwuTyEpMW5%2BNSK6r%2FPcr%2FhMOSy48EGOqUBYuxhfNdDthOJCCnk8Xre2ye7fTiRC8CvBdaHnvs%2BJO7Mus00s26q9HbfbTs6MqEEWSV2ZqPzZtYuYX%2FOy%2FpXSODzdJYaWJttg84dQeKGVMWQbuHpdh%2B1dj%2FNL3%2FTaEINNTor2O927bN2xysCbeDQRBoLHcCRPljqz4C%2Bm7L%2BZxsaHYuCv2eSUWL%2FhNmGRgCezo%2BgrrwR9Fr3HhG77tYR1bUBI5N8&X-Amz-Signature=47b2a5e4ded9675b12b7b1b9ce4c91f4d132b8a15dbcf5113d1337b93f8b8619&X-Amz-SignedHeaders=host&x-id=GetObject)

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
