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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4RP4GG7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH26LPy4jEYkxHHbTvs1929LqSEwTdqE3jK7OtPQripIAiBKA%2BMpMNFTCgxZU3FwbA7GuVIt8VbHxsEi%2Bzu9gaXqqiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3PTfIJvnkIGrVELKtwDkqbai5GdFJ%2BKO5RjLOiH5DPPZUmTOwSS0k6ohEEg0J%2BrUWVYaW%2FzblMhltQIJY1wXlv1%2F4yfUh40de9fOKRMYs7tntn3Hzdmq3Qra2XbHviCKI3oQ%2F9MQDqyjwRo94Il%2Bge6ozT6Sg0%2BlSptM3tnnUITwWnsnr9M2YILjTxGD%2BiJroAzjun9HTTQ%2FA%2FGY5DR8pBITPTYrUjICstSCOQu0K57Y9xgWPaNK%2Bt24EI6%2FxQLG0qOiqOJkpIUr3HwG2aiUds7FG4UUl1A2md0jzcKRaawYOGk18dqvviOg8IUIJlfRbIx1AQMeiO1fKIo%2FsDd2jeH1uZSKpzyy1EwAEjWb%2BIoNZvhgCVBSWWCU9AYAI4hRy401kRiZpZrmtYcs3uhXsuenqskakZV2M%2Fh9JNujJ9lQx4zaFJi0YUh3FOi6D%2Fve5DcIvlYa938Y%2BQNq9cIZWLj%2FCDeLwUHRW6IGWbyKw%2BCrMOyUna2jD7yfXvOJb86%2B5THUESxVR64dee9sErAR2wqYyR%2F95z%2BtwPM0vtk%2FR8k7AEa3hdjxQj%2BUB4kOBmwMoLYfD%2FNpeIdbqeL%2B6oXJazl3rMnmWE96hQQueUMI4%2F%2FF7y2fuDbCrfd8CsVmwaIcq5tv0On3NwPpFUwnr3TwgY6pgHRA%2B2kub6U0MvcUkj6gljk4kBj0uMflx4BtrjDN0Wd1341VUjZh8Kn2EW8SduwzSYhBtBjaYmMDf1iAbXK%2FRQFxXCl0013QqYtqp0WsBPQzHAER1YpmNOuR7H3Ha6Vr4H8LNP9Q5piqhvvwn52wGm5AIVgvCmOEO3Xag2WlzmIJxuPaxXKcuRp8Rfm6hypZRJ15M0ACBhoKWE700NghLlDZtdPW1fk&X-Amz-Signature=9df4df3f9b40de04fce384f07ac285ec0660f8d314f10fede583bf3be429dbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4RP4GG7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH26LPy4jEYkxHHbTvs1929LqSEwTdqE3jK7OtPQripIAiBKA%2BMpMNFTCgxZU3FwbA7GuVIt8VbHxsEi%2Bzu9gaXqqiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3PTfIJvnkIGrVELKtwDkqbai5GdFJ%2BKO5RjLOiH5DPPZUmTOwSS0k6ohEEg0J%2BrUWVYaW%2FzblMhltQIJY1wXlv1%2F4yfUh40de9fOKRMYs7tntn3Hzdmq3Qra2XbHviCKI3oQ%2F9MQDqyjwRo94Il%2Bge6ozT6Sg0%2BlSptM3tnnUITwWnsnr9M2YILjTxGD%2BiJroAzjun9HTTQ%2FA%2FGY5DR8pBITPTYrUjICstSCOQu0K57Y9xgWPaNK%2Bt24EI6%2FxQLG0qOiqOJkpIUr3HwG2aiUds7FG4UUl1A2md0jzcKRaawYOGk18dqvviOg8IUIJlfRbIx1AQMeiO1fKIo%2FsDd2jeH1uZSKpzyy1EwAEjWb%2BIoNZvhgCVBSWWCU9AYAI4hRy401kRiZpZrmtYcs3uhXsuenqskakZV2M%2Fh9JNujJ9lQx4zaFJi0YUh3FOi6D%2Fve5DcIvlYa938Y%2BQNq9cIZWLj%2FCDeLwUHRW6IGWbyKw%2BCrMOyUna2jD7yfXvOJb86%2B5THUESxVR64dee9sErAR2wqYyR%2F95z%2BtwPM0vtk%2FR8k7AEa3hdjxQj%2BUB4kOBmwMoLYfD%2FNpeIdbqeL%2B6oXJazl3rMnmWE96hQQueUMI4%2F%2FF7y2fuDbCrfd8CsVmwaIcq5tv0On3NwPpFUwnr3TwgY6pgHRA%2B2kub6U0MvcUkj6gljk4kBj0uMflx4BtrjDN0Wd1341VUjZh8Kn2EW8SduwzSYhBtBjaYmMDf1iAbXK%2FRQFxXCl0013QqYtqp0WsBPQzHAER1YpmNOuR7H3Ha6Vr4H8LNP9Q5piqhvvwn52wGm5AIVgvCmOEO3Xag2WlzmIJxuPaxXKcuRp8Rfm6hypZRJ15M0ACBhoKWE700NghLlDZtdPW1fk&X-Amz-Signature=edec373c7de9d794c8ec9ba30a7c5af78d51b5ccd014339c1ae860794e81a8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
