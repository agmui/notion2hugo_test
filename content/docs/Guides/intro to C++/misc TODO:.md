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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YBGN7I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGJgBKx9V%2BILPHZg8qqECHt3k6UWUDlhRjAtAnGg60lAAiBSakVYn4VdlCyYQ5HU%2BTWZnQw8%2FiMUtGH2JKs4bMI%2BHSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBC9TmLapF89MzViIKtwDpX21z%2BEPDf6vzu1kxNKoCy39KowOGv4gCZeBL3gqHeJLLnZarDCWW7y4rA6OjHFJawAeD6XnTvcT93AEp7ibCvVRAxhiW4A2digl5aC85vBfcoIpA5hOXhzw3NcoGTqViJoJEiEC4vQapCVJddS%2BhOGIJNx1EsAm7lJHjDXNFv0m2JmGz5ZAKoo6B8NdtmxzTEnt%2BMqH5jAk3Fes8nsCfPz%2BDDd7VQQqi5zcqQeckflE%2BHkBruQamv%2BBAoZ42u5ilA%2BnZR0zQIm5AkB2E5ttx0%2BfLxi4RuKeZ%2Fqon117go93WxNK692DUdUgE285%2B%2FpTqvtX735lUsh%2BzYsKm8%2FUeYJHafzkfA%2B9158Stj7s1V90N%2FcnpzmSWjgJAOO%2BzB8UnoCMkpVla%2FIsX3nt7pt1cp9bWV%2F2F1c9%2B428RUetHLnqzDv3PuTjVGg2Lg5Q%2Ftj0808fUxUGs6sH5I3HB0ve4kRoKN1Wnd0n6zBv0FmhYMd6zus60Q7BhY0nlJsPa0ixna3pAelleM0SvA0%2BMP4e8Y5o8D5B6Rj4cDPTv%2BmWwBTYWunXqWbRJpkerFDEynHkVG9kBwXPM%2Bwh0jyBcbkjVfqpSJHd8sdkhM0jMny%2BSW98jmPmcJJg%2Fsot37Iw9vWIwQY6pgG7fSimdSXxvUGJ66lIOYdFn51t3wE%2F0g9hQQbJ3p8B4upb7S75EdAiLY%2BASP1T%2FIlk3Wv3q%2BR2tlcLmv9HApI4pjUd8GOdJTqUEGa3Hi9kRND1uVfgnTvdWzY2sQzSu4L8vw2Va3uX3v7jskDzS7VmZbdFMWDHnqh7WZ59u7%2Fyivbn7ScSMGmSoYGEgJGJyGFTgVLr9HnZjSMn8pZGFVNN6sQguR%2FP&X-Amz-Signature=1b828245d8a9b0e52fcfb0a3af85fde5b69fb8efd5caf0acaebeee4cf49fcedd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YBGN7I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGJgBKx9V%2BILPHZg8qqECHt3k6UWUDlhRjAtAnGg60lAAiBSakVYn4VdlCyYQ5HU%2BTWZnQw8%2FiMUtGH2JKs4bMI%2BHSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBC9TmLapF89MzViIKtwDpX21z%2BEPDf6vzu1kxNKoCy39KowOGv4gCZeBL3gqHeJLLnZarDCWW7y4rA6OjHFJawAeD6XnTvcT93AEp7ibCvVRAxhiW4A2digl5aC85vBfcoIpA5hOXhzw3NcoGTqViJoJEiEC4vQapCVJddS%2BhOGIJNx1EsAm7lJHjDXNFv0m2JmGz5ZAKoo6B8NdtmxzTEnt%2BMqH5jAk3Fes8nsCfPz%2BDDd7VQQqi5zcqQeckflE%2BHkBruQamv%2BBAoZ42u5ilA%2BnZR0zQIm5AkB2E5ttx0%2BfLxi4RuKeZ%2Fqon117go93WxNK692DUdUgE285%2B%2FpTqvtX735lUsh%2BzYsKm8%2FUeYJHafzkfA%2B9158Stj7s1V90N%2FcnpzmSWjgJAOO%2BzB8UnoCMkpVla%2FIsX3nt7pt1cp9bWV%2F2F1c9%2B428RUetHLnqzDv3PuTjVGg2Lg5Q%2Ftj0808fUxUGs6sH5I3HB0ve4kRoKN1Wnd0n6zBv0FmhYMd6zus60Q7BhY0nlJsPa0ixna3pAelleM0SvA0%2BMP4e8Y5o8D5B6Rj4cDPTv%2BmWwBTYWunXqWbRJpkerFDEynHkVG9kBwXPM%2Bwh0jyBcbkjVfqpSJHd8sdkhM0jMny%2BSW98jmPmcJJg%2Fsot37Iw9vWIwQY6pgG7fSimdSXxvUGJ66lIOYdFn51t3wE%2F0g9hQQbJ3p8B4upb7S75EdAiLY%2BASP1T%2FIlk3Wv3q%2BR2tlcLmv9HApI4pjUd8GOdJTqUEGa3Hi9kRND1uVfgnTvdWzY2sQzSu4L8vw2Va3uX3v7jskDzS7VmZbdFMWDHnqh7WZ59u7%2Fyivbn7ScSMGmSoYGEgJGJyGFTgVLr9HnZjSMn8pZGFVNN6sQguR%2FP&X-Amz-Signature=3a3aee78ed02cc3ec16982bd94338162e666d7d6e1c954da04cc545707a27747&X-Amz-SignedHeaders=host&x-id=GetObject)

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
