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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MZWP23%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuZPhMNey02YBdwforPRqLSbbK%2FtAeNLb6A%2Ffd0d7iQIhAKhU6jEKZhvcqKswplIpBxSYnrnqBKpme9fyBwEHI1rZKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5QRzKFPMvDruaD6sq3ANPSr0nWyH%2FQFYkXy7UDcOJGtN1j7CDrf8Mb75I18ajuwCGa1CIPXheBbR9QvhkqfOdOJrUvAiYbBj1HNlQ7ce9RvNNVnXp9UUsJf2co%2Bk5%2B4Kpqv3G9FOwJ8oQ0ka90W3zfcFa%2BfbJGrIors8ER2O%2B0vpSoNuVlfFrLO8WrUSm9ItysK7%2B0Yb5xU0kNgB7%2B89oksS%2Bi9xjwDpWfMI0dUPBGEXPgNHvngGVtI%2FcdLxpqd4%2BJZprobvYQMY5hqNk7i4quoAHzSxYa3Be%2FQIjfrmtFN6u%2F%2BtMImKxxG0pMyrhbfegf%2FNqutfm7hvwe5VSaFtSsYSvr5RHIST0PepkhS3Qd6uapjJjHSWf2kn3XRo8fqb%2FC8DcyCIalXZMJtUf18ePmAUg6fGCqqS%2FGnD%2BV9BfEGb6uGRpN2spiPHk4hjRFRHmhYGpsyz7%2FohccBdX4FmIbZcgr7xQnFrr9vLoKrC4UNN5dMFggFJJmi204blSO3jxraVP9t2bXARIsPQ2LFvAXBOt0y26P5jenIbWlz9IwlImADYQroj2rSZJPtxADaLb3WL3zaHAqeZi996V2YQ7l3a4iCfCldO4cCOmAjSPX%2FsUQ%2BZw1goGWhVt%2BpxSAFG8s66VWTokS0ljnzDehJu%2BBjqkAf0UkirTLQSrPjvck2ReEzaOz4miCdpLjsq5Du6QUG73h9Prb8o2EQOQFzCP9%2BPS2y1fjji5jp8xuPpNBFuFo%2FRM6qqvqppkZRPUDVoIy7PjgFOH6N%2BLOkvoC8R6Yb6Zyi9Mvaj3s2yJHyWNBWRf8s2wQVOgns2NC%2F8dRgcHm%2Bk4bTDpJwkuLVg5AdEK3ibiN2MWGaaKtPh9Yo9qgnynC9oBT5g0&X-Amz-Signature=ce5416d1a1fdf00fc70ff496dabe64e65adb240046366cae0f6e57b882203056&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MZWP23%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuZPhMNey02YBdwforPRqLSbbK%2FtAeNLb6A%2Ffd0d7iQIhAKhU6jEKZhvcqKswplIpBxSYnrnqBKpme9fyBwEHI1rZKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5QRzKFPMvDruaD6sq3ANPSr0nWyH%2FQFYkXy7UDcOJGtN1j7CDrf8Mb75I18ajuwCGa1CIPXheBbR9QvhkqfOdOJrUvAiYbBj1HNlQ7ce9RvNNVnXp9UUsJf2co%2Bk5%2B4Kpqv3G9FOwJ8oQ0ka90W3zfcFa%2BfbJGrIors8ER2O%2B0vpSoNuVlfFrLO8WrUSm9ItysK7%2B0Yb5xU0kNgB7%2B89oksS%2Bi9xjwDpWfMI0dUPBGEXPgNHvngGVtI%2FcdLxpqd4%2BJZprobvYQMY5hqNk7i4quoAHzSxYa3Be%2FQIjfrmtFN6u%2F%2BtMImKxxG0pMyrhbfegf%2FNqutfm7hvwe5VSaFtSsYSvr5RHIST0PepkhS3Qd6uapjJjHSWf2kn3XRo8fqb%2FC8DcyCIalXZMJtUf18ePmAUg6fGCqqS%2FGnD%2BV9BfEGb6uGRpN2spiPHk4hjRFRHmhYGpsyz7%2FohccBdX4FmIbZcgr7xQnFrr9vLoKrC4UNN5dMFggFJJmi204blSO3jxraVP9t2bXARIsPQ2LFvAXBOt0y26P5jenIbWlz9IwlImADYQroj2rSZJPtxADaLb3WL3zaHAqeZi996V2YQ7l3a4iCfCldO4cCOmAjSPX%2FsUQ%2BZw1goGWhVt%2BpxSAFG8s66VWTokS0ljnzDehJu%2BBjqkAf0UkirTLQSrPjvck2ReEzaOz4miCdpLjsq5Du6QUG73h9Prb8o2EQOQFzCP9%2BPS2y1fjji5jp8xuPpNBFuFo%2FRM6qqvqppkZRPUDVoIy7PjgFOH6N%2BLOkvoC8R6Yb6Zyi9Mvaj3s2yJHyWNBWRf8s2wQVOgns2NC%2F8dRgcHm%2Bk4bTDpJwkuLVg5AdEK3ibiN2MWGaaKtPh9Yo9qgnynC9oBT5g0&X-Amz-Signature=07a77163a279fc29be000985111dd296b2f2581edee89952aa20228961a2c76f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
