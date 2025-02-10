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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIMVHQQW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B6FmrL5d4gFYJnzg%2FZ68A2m5ZquS3cdIqVnjY3VR1NgIhAJWVCoLpWMOVVfyDDl3%2BFtd3om3z8aaZ16h8a%2FwaHbUuKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0oIT%2FltYQMr%2BJwFkq3AOQ0eAuyPJv8EhCrlKyPB2NVYKyTscvmqM8pypBMH5ZsiO16J03k81htps28CcIANDjuv6kG%2FGulnJlgZASdlzs76ofAtfLsc8xcA7tLzX7imVQBOgi1kni4TNO%2FOX4RzoK6Sp32DjcfC2t3rC%2FQJi4C4JfggCoQ1iTM3643nlZocRH4P9DrF3gKE61dlzgf64QkUo0BTa8ZpnS3Mkq6R2FejT3oJo7OzWUWKkfRy3E4A8%2BHn9ShRym3j1Bqw4GLOou4R4Czr4aFMHPIKICtT7SR68KT4t4LRjtg6OnEQN7UNx6eQWnb9i%2FRNq72gsPsqQ1m39aYmhWMYTcoviWiaxAR1CRFkmdJnfwY0mr5WyDVEf%2B85LRDtN05x8F0sIyfEP2C%2Boi4e9ySXwIguHZqzOZc29qJtrdbAciEFtT16UjKCAjVM5q58qHmBp%2FL9ebcYPeV0fx8qAUiTbVk2Lc2fxhfQLH3vu8bNl%2BkDl6dBhe%2BLgYY54xX%2F9I2ADvZS90yU8uQCxxOz%2Baac2EjfLJ23oOOiOIc6aTQrDmMPpRUgPHEsnmrgirLzVPrrPEI7dFRZTdXHniWycvq7rnZYDEI5c%2B%2F4Hl8SYsuYljFE%2BAZMEiTJDj3Xm1hr%2B8IWsl6jCB2aa9BjqkAbnvaWhe7fNTCWdcPG%2B%2B7BUm2GBPlXjUk5c2ztk8SyzPD2cFMPQrWASTFVhX8rSWS4uKF8Al%2FDP%2Bz8BMpwKaSqskdx1Qgd21uwl79wtBaV3nNjE7UVT%2BqXsfJ%2F%2F%2BsSP7iWxj%2FYQ47Z34ODpa9jSMCdsA%2BUjGQWcf5DF2p3%2BcRMPeonBWUde%2BdXDRnzPht6SvskHH7a58jxSHRWOSmQW8wuqUSfeY&X-Amz-Signature=165fca44a9a9a954f82f67d9c76f94ea6aefb0a93b08d499aadfa5984c07317e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIMVHQQW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B6FmrL5d4gFYJnzg%2FZ68A2m5ZquS3cdIqVnjY3VR1NgIhAJWVCoLpWMOVVfyDDl3%2BFtd3om3z8aaZ16h8a%2FwaHbUuKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0oIT%2FltYQMr%2BJwFkq3AOQ0eAuyPJv8EhCrlKyPB2NVYKyTscvmqM8pypBMH5ZsiO16J03k81htps28CcIANDjuv6kG%2FGulnJlgZASdlzs76ofAtfLsc8xcA7tLzX7imVQBOgi1kni4TNO%2FOX4RzoK6Sp32DjcfC2t3rC%2FQJi4C4JfggCoQ1iTM3643nlZocRH4P9DrF3gKE61dlzgf64QkUo0BTa8ZpnS3Mkq6R2FejT3oJo7OzWUWKkfRy3E4A8%2BHn9ShRym3j1Bqw4GLOou4R4Czr4aFMHPIKICtT7SR68KT4t4LRjtg6OnEQN7UNx6eQWnb9i%2FRNq72gsPsqQ1m39aYmhWMYTcoviWiaxAR1CRFkmdJnfwY0mr5WyDVEf%2B85LRDtN05x8F0sIyfEP2C%2Boi4e9ySXwIguHZqzOZc29qJtrdbAciEFtT16UjKCAjVM5q58qHmBp%2FL9ebcYPeV0fx8qAUiTbVk2Lc2fxhfQLH3vu8bNl%2BkDl6dBhe%2BLgYY54xX%2F9I2ADvZS90yU8uQCxxOz%2Baac2EjfLJ23oOOiOIc6aTQrDmMPpRUgPHEsnmrgirLzVPrrPEI7dFRZTdXHniWycvq7rnZYDEI5c%2B%2F4Hl8SYsuYljFE%2BAZMEiTJDj3Xm1hr%2B8IWsl6jCB2aa9BjqkAbnvaWhe7fNTCWdcPG%2B%2B7BUm2GBPlXjUk5c2ztk8SyzPD2cFMPQrWASTFVhX8rSWS4uKF8Al%2FDP%2Bz8BMpwKaSqskdx1Qgd21uwl79wtBaV3nNjE7UVT%2BqXsfJ%2F%2F%2BsSP7iWxj%2FYQ47Z34ODpa9jSMCdsA%2BUjGQWcf5DF2p3%2BcRMPeonBWUde%2BdXDRnzPht6SvskHH7a58jxSHRWOSmQW8wuqUSfeY&X-Amz-Signature=d0f53f78602d8e162233107cca476e81725ae964e784d4b1abb6458fb1dc5ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
