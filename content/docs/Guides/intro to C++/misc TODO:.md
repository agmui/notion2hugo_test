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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCJFGG6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZvQ19k%2BELxRazwiaePcvWTvTTIu28Xhg%2Fs2BdarUBAAiEAlG6r%2F2o2oyXaB8tPtIvuDStJwZsUS7gUFl7zq4cGuegqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMqJOs63OL%2BYB24HyrcAy3zfH9Zkz3uIe7XoF5x6OUwmjTjLSWqDLerztpNFN0H8l3nrqsmz3KySSmBKm50DRntHTFai9uJMrKOfsvCHiv9tDVhu0P0kBG%2BTEvyljhW5DE7EICX2sPkP3SVGFU7Lr%2B2Yqt0bEHJ7PJQsX%2BIt6MUgsZ15oIHG8LojYgFqYnshd09%2F9imO3mC%2Bxlv5fTz0iWthApnhKpU4EI1VQnA575KA6qPVkfVyDlIMSqZOSe03rpWgt0AcdcX9RZu1A0Pm4aZRCn%2FK55s2yHOr4MUZRU1TRrjGd0dC%2BlMuvGeIlU6Ji25R1uOoh90NIOHQkwiL2URxJg6gnYUPtKW0WxZC59tBMXTWcEod22eyHTvQwaar8Maq0TSxVAJshUbCLaqoAluqRbF%2FByCC%2Byny1icGTg9X%2B0a62KXeLtM4VlZXBZIKw1ZTlJtFrpJ5Q0HFV3nhfUhCDs%2B7Uoe%2Fd43T%2BXXPrGAYpafMOWjTR%2BmOnXT%2Bd6juU8yI5RzxHS3wbrkmkeWA487hO3eC6eOLq2fo0cJ72aWqCiASSw9QNEvXjA9bcScsm4w7KET%2BdDMyUZkqvxdIW%2FhvFvzMbN974vcWYw4OJxSS9xvs8ePeEu%2By2vdEl6hU9sjHAitG%2BgVAvctMKHo3MQGOqUB3rpBJAd%2BAOMSkQNm3nY%2B4xHFwme8rwMNVFsQVm6%2B0iLHN2g0fGEdh58DPQea5ca7%2Bz6fmX%2BPjzZwwRmstzdqB8ptGn4smv%2Bpr6WK9AQFx4NWGbawmRMntI1xSgLABIbyndwgRgpQkTmCSKitBA3YYAtWcQNrhux8qVFX3mgQ4lUZ5avPEUXK9CVd%2BolC6oICwU5trrWtMyeR41wnheKLCivLP6fn&X-Amz-Signature=535307302d51561b7103a23a2a2a8d552fdd80eede09bd60fe444404544677d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCJFGG6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZvQ19k%2BELxRazwiaePcvWTvTTIu28Xhg%2Fs2BdarUBAAiEAlG6r%2F2o2oyXaB8tPtIvuDStJwZsUS7gUFl7zq4cGuegqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMqJOs63OL%2BYB24HyrcAy3zfH9Zkz3uIe7XoF5x6OUwmjTjLSWqDLerztpNFN0H8l3nrqsmz3KySSmBKm50DRntHTFai9uJMrKOfsvCHiv9tDVhu0P0kBG%2BTEvyljhW5DE7EICX2sPkP3SVGFU7Lr%2B2Yqt0bEHJ7PJQsX%2BIt6MUgsZ15oIHG8LojYgFqYnshd09%2F9imO3mC%2Bxlv5fTz0iWthApnhKpU4EI1VQnA575KA6qPVkfVyDlIMSqZOSe03rpWgt0AcdcX9RZu1A0Pm4aZRCn%2FK55s2yHOr4MUZRU1TRrjGd0dC%2BlMuvGeIlU6Ji25R1uOoh90NIOHQkwiL2URxJg6gnYUPtKW0WxZC59tBMXTWcEod22eyHTvQwaar8Maq0TSxVAJshUbCLaqoAluqRbF%2FByCC%2Byny1icGTg9X%2B0a62KXeLtM4VlZXBZIKw1ZTlJtFrpJ5Q0HFV3nhfUhCDs%2B7Uoe%2Fd43T%2BXXPrGAYpafMOWjTR%2BmOnXT%2Bd6juU8yI5RzxHS3wbrkmkeWA487hO3eC6eOLq2fo0cJ72aWqCiASSw9QNEvXjA9bcScsm4w7KET%2BdDMyUZkqvxdIW%2FhvFvzMbN974vcWYw4OJxSS9xvs8ePeEu%2By2vdEl6hU9sjHAitG%2BgVAvctMKHo3MQGOqUB3rpBJAd%2BAOMSkQNm3nY%2B4xHFwme8rwMNVFsQVm6%2B0iLHN2g0fGEdh58DPQea5ca7%2Bz6fmX%2BPjzZwwRmstzdqB8ptGn4smv%2Bpr6WK9AQFx4NWGbawmRMntI1xSgLABIbyndwgRgpQkTmCSKitBA3YYAtWcQNrhux8qVFX3mgQ4lUZ5avPEUXK9CVd%2BolC6oICwU5trrWtMyeR41wnheKLCivLP6fn&X-Amz-Signature=7512a1c570af1d7ad046684b3fb4d86ad50dda12087d294d04ac8083d0ea4d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
