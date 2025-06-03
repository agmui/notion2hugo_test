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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IDHUMW4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXgHSnD6kCFWFJq0%2BYasi4JmVzBo8RfIU8RU3sKrcnGAIgbD3RVg9jmWQajZ%2BvS2GK4HN0am4WvCEBBUI50fO3s0MqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAY7JmLaTYSwPDu4uircA8SFeSW9VYfgYqAdyf0nRozSG%2BIEBHmHRtFv66Xbl9pajUuMe1aM2X6%2F1ZMuLIUDAWuk5rLbIMBisTy33VqbTwG98jMg%2B58UkJHsBBzIx9fTOfcxMnGHPojVQWv0w3wR62gLGtijDsm2GrlUumtF5YPd8GeCRYEvU%2FekxF2L53fpZY4ABRjpPjF2T3XbuX3Q%2FpR31BJ06pxDwhQkHO4iZNb2Rp%2FVMJ%2BcdWtJactaABFXAl%2F0NV%2F2yTvreLq%2FOaZgGY3HPZ%2BmRk0%2Bhq7Bv7y%2F2oOURPdxjt3JKHqvxuhZk1k1hYOgrw%2FUxcomj5JBg%2BDgPrYzOLQ75HgRWvQ7v3vj8cLAsi5Et49ERSXvfgwdgUKLm0n3smYRqMxq6vmJS1koGeWhW3PuobFZxdb3xNEDO59E9PTYxFaf0zdFZw9Szi9BKvMxwjtNFXApQU62y44ikbjoTvgLsXkyRwd%2Bi7AbaN19qdmZ21VBu%2B1u1tQ4ZIXdYYHv5QzpNKUph1y1cawQPVFkbWc23h22TkPuq1l83tXe3bjkY7zFonAdvQUQ4azVPgjabSw6LYII%2FXJWniP0jz3FjiCz93gmmB08y3yLAQJ9AwV6L0chibM0GZFqGl7LglVqZYbmBEFt40QnMLHt%2BcEGOqUBJcKnDEKWAcJbtLJ70nq90Nj%2Fit2wNd9LlHCWCw9emjyEU%2BvSfPbCTKu6mTk8tMJPCtamB3vnfiyQ8wnhQwx%2FjvUQsPQmgtEbJ7V0c5XDBawhAder9FzsiAkOikL%2B26oqyBM588QHiOd5wnOEhyl5jBmnnDPAQnc%2BEGn0ADPjTNtie3mQKNc3vKGaozrWqBT6u79yB3hwTrAgN8qb8byccnVVUVBx&X-Amz-Signature=fe014f1de7286c0016329d097d89f560d11594e70403970cd4a6b11ee5f3ec85&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IDHUMW4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDXgHSnD6kCFWFJq0%2BYasi4JmVzBo8RfIU8RU3sKrcnGAIgbD3RVg9jmWQajZ%2BvS2GK4HN0am4WvCEBBUI50fO3s0MqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAY7JmLaTYSwPDu4uircA8SFeSW9VYfgYqAdyf0nRozSG%2BIEBHmHRtFv66Xbl9pajUuMe1aM2X6%2F1ZMuLIUDAWuk5rLbIMBisTy33VqbTwG98jMg%2B58UkJHsBBzIx9fTOfcxMnGHPojVQWv0w3wR62gLGtijDsm2GrlUumtF5YPd8GeCRYEvU%2FekxF2L53fpZY4ABRjpPjF2T3XbuX3Q%2FpR31BJ06pxDwhQkHO4iZNb2Rp%2FVMJ%2BcdWtJactaABFXAl%2F0NV%2F2yTvreLq%2FOaZgGY3HPZ%2BmRk0%2Bhq7Bv7y%2F2oOURPdxjt3JKHqvxuhZk1k1hYOgrw%2FUxcomj5JBg%2BDgPrYzOLQ75HgRWvQ7v3vj8cLAsi5Et49ERSXvfgwdgUKLm0n3smYRqMxq6vmJS1koGeWhW3PuobFZxdb3xNEDO59E9PTYxFaf0zdFZw9Szi9BKvMxwjtNFXApQU62y44ikbjoTvgLsXkyRwd%2Bi7AbaN19qdmZ21VBu%2B1u1tQ4ZIXdYYHv5QzpNKUph1y1cawQPVFkbWc23h22TkPuq1l83tXe3bjkY7zFonAdvQUQ4azVPgjabSw6LYII%2FXJWniP0jz3FjiCz93gmmB08y3yLAQJ9AwV6L0chibM0GZFqGl7LglVqZYbmBEFt40QnMLHt%2BcEGOqUBJcKnDEKWAcJbtLJ70nq90Nj%2Fit2wNd9LlHCWCw9emjyEU%2BvSfPbCTKu6mTk8tMJPCtamB3vnfiyQ8wnhQwx%2FjvUQsPQmgtEbJ7V0c5XDBawhAder9FzsiAkOikL%2B26oqyBM588QHiOd5wnOEhyl5jBmnnDPAQnc%2BEGn0ADPjTNtie3mQKNc3vKGaozrWqBT6u79yB3hwTrAgN8qb8byccnVVUVBx&X-Amz-Signature=740285470a5567050449bc725cad9a4107f94a88c76ab712fafb4884436c7c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
