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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVAINCKL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHW7UhezN7eClj8MNk0%2B18Llq3gCUKX8NepzFDP%2FL2%2BlAiEAyxNyhuCEGqdfQIy2o46G0qCYv96IVd5AnwSaYVeQ57cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlcTScxtfIBZYWBiSrcA9vlCXIxsDAW7PoALX1BX4VFVWt8rjWZU5ozTT3IhQ2as6ic%2ByMSd%2FPDe1hT2phcei3WW4jBhWiSiQyKgrO0wAhxfJmCvpptUXcBVdqBDt4oXJTq%2F8mdX0YduLXyY5Kc51K2pCzam2gwM6bAaE5NXogDtYrI1n7SvqFz6IxKSZmrngNj1R3CNQrX9DLEzcCn2GTfBi5coIf26RPrPOX3VWWcwbVt1HSZAePGeFg0jUzJe80L5ycVKpyX%2BuThhMUL4BeXslwbXH%2Fr5K4JQLY4BIyoYp3fZcfwF%2FWX5%2F9k9L8jwKVNZzGZrX7%2BLqgJWal6%2BmVT8a0iD7%2Fw1n1hCBY91WCHiDcwYghwNiYFpUb%2Bdz5mZNYefmk2hI256HKYUn1tj8obxjiAGH8ZiORBpgrUqkz34t9cEEkroIBlh%2FXFyS6UlB5QNoJt8dem5n7PGtvG11wC8RS806LIMagist2G4vuL1FZFubfWoJHZo51iJpb%2FQqd4ybhydPweUdNxqw0e1HzKpxIyhRaf5VrZ9toQNfzBS0QCyzcyaOy9RXNW2pQ1FOHiB6TexW8Q5lsC9QsICVPeTYTr3DxmiLQoeHmZIgLSp2YrpbABp%2BolvhBJcjqcK1hnkZCaW4edXi%2F%2BMK3xl8AGOqUBwBDrBPxXIEG4XupxEykNMikr%2B6lNbA26ur1Ab0v5PxmoriBggDTCDffxp1xIR6gmRrDyZ2tlF19EgrignJuNjqAtaEpRefaWESIXyUD1wsz%2BUwGn5Qdgd%2F%2Bj34K%2BTNtPUP9oug7BDQxASK47d80MeCl3xIcYPakUjgDcSApUu9N2%2F6hljPtYaH8XULTSqvr7Fa%2B2rEv26xM1knUOUsjOC9fHcys1&X-Amz-Signature=39dafb5e564e5fb38e159ac3175de607b7d6a2406b135c469d7ab1017ab00c10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVAINCKL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHW7UhezN7eClj8MNk0%2B18Llq3gCUKX8NepzFDP%2FL2%2BlAiEAyxNyhuCEGqdfQIy2o46G0qCYv96IVd5AnwSaYVeQ57cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlcTScxtfIBZYWBiSrcA9vlCXIxsDAW7PoALX1BX4VFVWt8rjWZU5ozTT3IhQ2as6ic%2ByMSd%2FPDe1hT2phcei3WW4jBhWiSiQyKgrO0wAhxfJmCvpptUXcBVdqBDt4oXJTq%2F8mdX0YduLXyY5Kc51K2pCzam2gwM6bAaE5NXogDtYrI1n7SvqFz6IxKSZmrngNj1R3CNQrX9DLEzcCn2GTfBi5coIf26RPrPOX3VWWcwbVt1HSZAePGeFg0jUzJe80L5ycVKpyX%2BuThhMUL4BeXslwbXH%2Fr5K4JQLY4BIyoYp3fZcfwF%2FWX5%2F9k9L8jwKVNZzGZrX7%2BLqgJWal6%2BmVT8a0iD7%2Fw1n1hCBY91WCHiDcwYghwNiYFpUb%2Bdz5mZNYefmk2hI256HKYUn1tj8obxjiAGH8ZiORBpgrUqkz34t9cEEkroIBlh%2FXFyS6UlB5QNoJt8dem5n7PGtvG11wC8RS806LIMagist2G4vuL1FZFubfWoJHZo51iJpb%2FQqd4ybhydPweUdNxqw0e1HzKpxIyhRaf5VrZ9toQNfzBS0QCyzcyaOy9RXNW2pQ1FOHiB6TexW8Q5lsC9QsICVPeTYTr3DxmiLQoeHmZIgLSp2YrpbABp%2BolvhBJcjqcK1hnkZCaW4edXi%2F%2BMK3xl8AGOqUBwBDrBPxXIEG4XupxEykNMikr%2B6lNbA26ur1Ab0v5PxmoriBggDTCDffxp1xIR6gmRrDyZ2tlF19EgrignJuNjqAtaEpRefaWESIXyUD1wsz%2BUwGn5Qdgd%2F%2Bj34K%2BTNtPUP9oug7BDQxASK47d80MeCl3xIcYPakUjgDcSApUu9N2%2F6hljPtYaH8XULTSqvr7Fa%2B2rEv26xM1knUOUsjOC9fHcys1&X-Amz-Signature=c9b19d808df4e96d585bd0b9143d8aff0fc95bcb33def62f676f19880f487fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
