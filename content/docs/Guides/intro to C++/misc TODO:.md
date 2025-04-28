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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QW22O3A%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0i8%2F%2BYbyjjjnctC0G57MtjvqNbBxm7mDbrUVn2o9thQIhAIHSHOL4FEwaaPxdTst5dzW%2BoTsVCkslKDog7YJ124qMKv8DCHQQABoMNjM3NDIzMTgzODA1IgzHK%2B3SThKmfzNLUvYq3AO2p0lxWC2pwTnYllUDKXLAmvOKc6%2BqUtvyufxPMehwJxK1Aef5YTbYpIQayAhP96Ng5Vc5MACO2XyL6Xa7yn7C0b%2FbujsRkBf2%2FFgWvjdO8lxFrH1Qf9TClwdh%2Fnu3hDbnOaGMMeVTCPTqySTqdXPHX4g4JjzZNuet5alTxd0loEXW3EbBI1UDoKTwJ%2F9bFBUdIFcjtXqTzYy47ZGhrDGZk4Mxa94vq1qCBJU7b4wWtI8nb%2BMtuK9eTkMvduPNy57KQtKaFdIKwtT%2Fropc8sDnyeZ6yq%2BIAENF%2FT81K8ktCIq9MLnw120qZMfHTaX5LoJ8JzuKXx4rAJlroohYPVxdXy0qHBCM%2FDkbXpirDbcZ0FAB89jNB2buwvAx9nQzK6nDrZj6HuR7l6WTeI25dzwdWAm3TA5eQPYJD8W4Nje8hj8eOIIEOkQsNwlYdEIvmmKomHvsehywxT%2BHiBRK8ndNLRVKu7EHqfoQMfZqAHIFD7TZzZVTXv4pGw4GlAkSy1IlkgV%2BxwGkC24%2F7OzbZfD5VImsQFwDpD%2BM%2FxstLiuCKA1Phru235t6P20nXSiGPeAWqAhmPtqNRAGgIYWKdd09M72Ad6c0GPgcwlWlNto4RByJRuZdchUvmqc9RTCRyb3ABjqkAUcgIE%2B1qFs8XVNGTXb1dylsqSQGkteSjP90P9A7IqIVqMiWPymt3jgY3e6oHPADlTeC5tt90R1eDUCdYWNYlFG1K8QIFv1k6q9IsmJ%2FiASTMb1AvP94%2BnlQ3L1uAyk7jbbRG1uj%2F3qqupbPqII30j1IktqKzMdbpHIlNEjC21pfDgjPXFZ1dJ1mvURABlZD2o966T1vhZOgcQmEXmIwvRHppa2A&X-Amz-Signature=be8e590c7877560b3085b5eaab4bcc7d65ed2ac7970605fbbb1769e8746c344a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QW22O3A%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0i8%2F%2BYbyjjjnctC0G57MtjvqNbBxm7mDbrUVn2o9thQIhAIHSHOL4FEwaaPxdTst5dzW%2BoTsVCkslKDog7YJ124qMKv8DCHQQABoMNjM3NDIzMTgzODA1IgzHK%2B3SThKmfzNLUvYq3AO2p0lxWC2pwTnYllUDKXLAmvOKc6%2BqUtvyufxPMehwJxK1Aef5YTbYpIQayAhP96Ng5Vc5MACO2XyL6Xa7yn7C0b%2FbujsRkBf2%2FFgWvjdO8lxFrH1Qf9TClwdh%2Fnu3hDbnOaGMMeVTCPTqySTqdXPHX4g4JjzZNuet5alTxd0loEXW3EbBI1UDoKTwJ%2F9bFBUdIFcjtXqTzYy47ZGhrDGZk4Mxa94vq1qCBJU7b4wWtI8nb%2BMtuK9eTkMvduPNy57KQtKaFdIKwtT%2Fropc8sDnyeZ6yq%2BIAENF%2FT81K8ktCIq9MLnw120qZMfHTaX5LoJ8JzuKXx4rAJlroohYPVxdXy0qHBCM%2FDkbXpirDbcZ0FAB89jNB2buwvAx9nQzK6nDrZj6HuR7l6WTeI25dzwdWAm3TA5eQPYJD8W4Nje8hj8eOIIEOkQsNwlYdEIvmmKomHvsehywxT%2BHiBRK8ndNLRVKu7EHqfoQMfZqAHIFD7TZzZVTXv4pGw4GlAkSy1IlkgV%2BxwGkC24%2F7OzbZfD5VImsQFwDpD%2BM%2FxstLiuCKA1Phru235t6P20nXSiGPeAWqAhmPtqNRAGgIYWKdd09M72Ad6c0GPgcwlWlNto4RByJRuZdchUvmqc9RTCRyb3ABjqkAUcgIE%2B1qFs8XVNGTXb1dylsqSQGkteSjP90P9A7IqIVqMiWPymt3jgY3e6oHPADlTeC5tt90R1eDUCdYWNYlFG1K8QIFv1k6q9IsmJ%2FiASTMb1AvP94%2BnlQ3L1uAyk7jbbRG1uj%2F3qqupbPqII30j1IktqKzMdbpHIlNEjC21pfDgjPXFZ1dJ1mvURABlZD2o966T1vhZOgcQmEXmIwvRHppa2A&X-Amz-Signature=2e4dfb10c647fad98a9d00ac11b76f85e02caf64b352727557748d7f94e1a576&X-Amz-SignedHeaders=host&x-id=GetObject)

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
