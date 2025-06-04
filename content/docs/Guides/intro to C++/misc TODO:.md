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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSM3GG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCwiUZZzBoaFypDcvf3ij8YdU2mBK5XBjZQ8HMI%2FHNRUwIgPaOW2bwpEAaS3ig1k6haC30cOmoLPzuzeMi2NR6XM6gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFT8qF24Hg%2BdAUhBLCrcA0AXbhBlNPmncSuj7fStiVYR4s01zYDNJH0Vbq8z47Su5ju56hpfASb%2Ba9%2FynhGdjxVQqJcxcsc%2FmU35xK24LSppfgddJP0O4AmwNGDa49YHmaV2YLhw67GivN5WkLPUKfG0SZ0xnB5ngYZ5GbdhNwcapFo89Q9F%2BIE%2FrobEJ0QZQgYi58wVV00fTT6hlxDXum0AhkSwE33OO%2FPUK1oSzZSg%2BQfXIsuOViEYXRMdNnp4x0Vv7sTgVzai8r2zQRjU%2BkbPliWQXCILuSRCr%2Frxp39Cajp1krAqiTXl%2FZturTsoYGRFJbN2Wrdu%2FYCLdWWY77WjAtPrsStHcscpLWBFLzwpaJXz56xdtpwrhLAKC9zl%2Bt%2FLnYTSoj2UKQsHE1sJnFba6w%2BQhV9Qw58ewnGZxamCunCjuOo%2Bq7Dn5X1G90JSJzSYUavSCnCoRUzOnP880tWw9Vv0FqYQ295AvuKwz5A1%2BZn48SLkcYgUcq6N00MLYvBstfWO%2B4ElkO5yMBqHTy9Q6rcWQWENc6mx%2BhaECycZ6KQrREb9SvChLJ6yXR2AuB5Pz2hA%2BDIjLrgy%2B6Otno85mSuSRThIvxDgGtefvWz4l3vXUyyCdYQNXiVL2yyokQPfM8ngHB51pw8xMJ%2FegcIGOqUB0k5k82EbFcu%2BsshXTvpy1IkYkdNj%2FMoooOy0Xb8%2FPH8T5UdspmtzDnhu9eJfhHMencSJyvtC9ov%2FrYWdvFa%2BAdQKwbcL96tH6erC9xJHsto%2FV8YX9l8RGQJdjtlkeD3uBOmkXTfEkKohlzSGvHsC3QehYBRL6SwlDrFp07jqhE9wPspjohj9FK8bVgt6w3AEhAsL6oGDZCNENtnEuUSd2VZ64x3Z&X-Amz-Signature=610dc30c7b502feb35b911bffcdb5ae55f648378535b03a7a299bb1fa64f85c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNSM3GG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCwiUZZzBoaFypDcvf3ij8YdU2mBK5XBjZQ8HMI%2FHNRUwIgPaOW2bwpEAaS3ig1k6haC30cOmoLPzuzeMi2NR6XM6gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFT8qF24Hg%2BdAUhBLCrcA0AXbhBlNPmncSuj7fStiVYR4s01zYDNJH0Vbq8z47Su5ju56hpfASb%2Ba9%2FynhGdjxVQqJcxcsc%2FmU35xK24LSppfgddJP0O4AmwNGDa49YHmaV2YLhw67GivN5WkLPUKfG0SZ0xnB5ngYZ5GbdhNwcapFo89Q9F%2BIE%2FrobEJ0QZQgYi58wVV00fTT6hlxDXum0AhkSwE33OO%2FPUK1oSzZSg%2BQfXIsuOViEYXRMdNnp4x0Vv7sTgVzai8r2zQRjU%2BkbPliWQXCILuSRCr%2Frxp39Cajp1krAqiTXl%2FZturTsoYGRFJbN2Wrdu%2FYCLdWWY77WjAtPrsStHcscpLWBFLzwpaJXz56xdtpwrhLAKC9zl%2Bt%2FLnYTSoj2UKQsHE1sJnFba6w%2BQhV9Qw58ewnGZxamCunCjuOo%2Bq7Dn5X1G90JSJzSYUavSCnCoRUzOnP880tWw9Vv0FqYQ295AvuKwz5A1%2BZn48SLkcYgUcq6N00MLYvBstfWO%2B4ElkO5yMBqHTy9Q6rcWQWENc6mx%2BhaECycZ6KQrREb9SvChLJ6yXR2AuB5Pz2hA%2BDIjLrgy%2B6Otno85mSuSRThIvxDgGtefvWz4l3vXUyyCdYQNXiVL2yyokQPfM8ngHB51pw8xMJ%2FegcIGOqUB0k5k82EbFcu%2BsshXTvpy1IkYkdNj%2FMoooOy0Xb8%2FPH8T5UdspmtzDnhu9eJfhHMencSJyvtC9ov%2FrYWdvFa%2BAdQKwbcL96tH6erC9xJHsto%2FV8YX9l8RGQJdjtlkeD3uBOmkXTfEkKohlzSGvHsC3QehYBRL6SwlDrFp07jqhE9wPspjohj9FK8bVgt6w3AEhAsL6oGDZCNENtnEuUSd2VZ64x3Z&X-Amz-Signature=219254d5a2c08ccc7ba5f7c7d42b6cef0c7d267004b077b7f01abb0d29cb713d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
