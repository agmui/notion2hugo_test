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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V432B6E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDK%2FTIipR5wTUr69xm1SanAONUDEe1wdoyblKnACl73VwIhAPAYea401dUJJOWa6fO2ffSH3fTB%2BL%2BQqoqZiY27V5dNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbvy7y%2BNDRD2svZEAq3ANQHoL%2F0II0gQLAjrizrT5Kyv%2F0bLoG8vhK2Lfbh3OrYxdOJa2Cr7I7%2FompQasoVAhDWxvSClmDLbE65YGxBlIg2wGzQPtFFnMv3KVT6hdKdU0VYFSq9K9aRMHbwYMY9DfvuIrvwg3U5AeMpljXnh663BnFcQAAO%2BgpJ%2FHNBNVQGITpJyeNZAA6RT0kfTR2eBhbuF9DbpXmCweXXtlAbibvtZPg3W%2FpIXLPym6WJ2OczPAhy8MiQXTtFSeOn%2BVB2beQB9%2BsiBoj0QH3qs9LiJLhKGfnFjlE2CGMDYeBS7x9mtgVVp%2Fo4r9NPTlTHE3JdDn5U%2F0FuLaQamT%2Bm79jXTbFV09RJ0znQJ0d2qUGcT%2BEf4fd6gcgwvdyTVLxaaZzceW0Adasl7hFEHbCCqi6IE9nHkmeBD%2B3hK%2F1AiUsRNU%2BxlHUQssFqE2m2ApdD%2Fi5aqrTlqTWsJxX%2F5erioTop4SHMhR9pchIVPfMFn%2BlN8M%2FnC4GMcVrOgL8PuOLyn96JPBcLAMUHTxNdwBSzDAYHAur9xDEo08nFAQqweSHuBkZgA6vBWjK0U1uq0uzcIfqLNbjvCdXqDf4hKn1rNAyoDTS3N7PNC1sPWL0FPwcySMN6RAGSRTRkpjEo1rlBDDSqdC9BjqkAX8zSQ4alHEmHvBjRKUIfNcrmW5FEzjYt4HJMhRrbAFLtHzf3jTDz0tBKcy7LP90e9hU2MHco2hCj4ZB1yB%2BHdK0Aka8GR5lTDaTa5FR%2FFjQa779jMPFFDM0ydIxPkEhPUD1Twi8FGaGNxLuOseJbPRrjztAxToI%2BNXVRsytBLDeISoidtu%2FSJ78R15XCAi98kV7t%2FCigjGu9FbRNLyRDhA642IH&X-Amz-Signature=377b6a63e6ec7f8ceef6ba34dcf412161bd2e47ced8ace4380b19ff6137ad85b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V432B6E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDK%2FTIipR5wTUr69xm1SanAONUDEe1wdoyblKnACl73VwIhAPAYea401dUJJOWa6fO2ffSH3fTB%2BL%2BQqoqZiY27V5dNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbvy7y%2BNDRD2svZEAq3ANQHoL%2F0II0gQLAjrizrT5Kyv%2F0bLoG8vhK2Lfbh3OrYxdOJa2Cr7I7%2FompQasoVAhDWxvSClmDLbE65YGxBlIg2wGzQPtFFnMv3KVT6hdKdU0VYFSq9K9aRMHbwYMY9DfvuIrvwg3U5AeMpljXnh663BnFcQAAO%2BgpJ%2FHNBNVQGITpJyeNZAA6RT0kfTR2eBhbuF9DbpXmCweXXtlAbibvtZPg3W%2FpIXLPym6WJ2OczPAhy8MiQXTtFSeOn%2BVB2beQB9%2BsiBoj0QH3qs9LiJLhKGfnFjlE2CGMDYeBS7x9mtgVVp%2Fo4r9NPTlTHE3JdDn5U%2F0FuLaQamT%2Bm79jXTbFV09RJ0znQJ0d2qUGcT%2BEf4fd6gcgwvdyTVLxaaZzceW0Adasl7hFEHbCCqi6IE9nHkmeBD%2B3hK%2F1AiUsRNU%2BxlHUQssFqE2m2ApdD%2Fi5aqrTlqTWsJxX%2F5erioTop4SHMhR9pchIVPfMFn%2BlN8M%2FnC4GMcVrOgL8PuOLyn96JPBcLAMUHTxNdwBSzDAYHAur9xDEo08nFAQqweSHuBkZgA6vBWjK0U1uq0uzcIfqLNbjvCdXqDf4hKn1rNAyoDTS3N7PNC1sPWL0FPwcySMN6RAGSRTRkpjEo1rlBDDSqdC9BjqkAX8zSQ4alHEmHvBjRKUIfNcrmW5FEzjYt4HJMhRrbAFLtHzf3jTDz0tBKcy7LP90e9hU2MHco2hCj4ZB1yB%2BHdK0Aka8GR5lTDaTa5FR%2FFjQa779jMPFFDM0ydIxPkEhPUD1Twi8FGaGNxLuOseJbPRrjztAxToI%2BNXVRsytBLDeISoidtu%2FSJ78R15XCAi98kV7t%2FCigjGu9FbRNLyRDhA642IH&X-Amz-Signature=a7d9e63feb38384838000f7ed9dc44185a505ea0cdfa98ca9ef518bd30c35090&X-Amz-SignedHeaders=host&x-id=GetObject)

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
