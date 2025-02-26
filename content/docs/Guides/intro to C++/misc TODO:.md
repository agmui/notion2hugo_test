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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGECCDPW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2By0wf2jNTvoxg26HRRfvmrk6UtnfpESCl27z9wQL1JQIhAI8zVxXZRsZagu6Znivd1YB1HeO0CJJ8djIIjUvCYqgSKv8DCF0QABoMNjM3NDIzMTgzODA1IgyUUej4JfLkS4OHP%2Bwq3ANVQW3EYPC7rHN6FJPPkj%2FeOoQsXOC070b7lPo3aeRnH51atC7lpvEEwB6b0weZ3VMN9gsnULIYQADv6uhCki6KoWddAY0lJq6yn9aI0ALlPFVvV368YUAvW%2FfNOaEDk4YH6REeg1WazW3GohePowi%2FG%2ByqBXXebSByMIlkE%2F6FL2oSZd5XGR6TM7k3Jr9jdn7e%2Bh%2BLGP9ttg%2BDzaz1c0q9%2FJG3pO8pgdV7dvs2%2BzKoLvtPrLjTWqy9VCVheylG1CrnDLvM3JwD0DJ6TX%2F6NQ8sguGFnL3lEgk%2FeNmnGYGBm43PpnA2B7WpoqUSAugWnk1f%2B%2BahIct9mcUrL%2BjpPBSVbad4QipUlWPpm1ntQHwRRO8Rpv32kgF6WI%2FuA1pxIQ3kxXftVWqlYpKQi%2FCY6hiML6HrJttnSLVrCAf1t8VkPHKt21iW%2FavHOFeiQH8ryYG8AwA6qp4svGqPsYnohJnNswR0kx4uk2tZn4yXElnBRGdZ7fFBN7sMo2%2FDjw8SeE05UJ4%2BKvMslIRrH8GvKqzNNPShf6GSCySeXJAQl3Qg5ukuKweUExS30Krz2IAhEV11moQ0aStGe8THOfwO6%2BONHoYFjVzAEoe%2Fkan4E%2B%2F2FZc2yCXxGI0OspgwcDDKiPy9BjqkAUJUDK5%2BY5mNdx1oDFm7i0QBpFSuEtO4T%2B1PyDNa%2FO3PpANMHIuXstwmHrWddD4Xix1%2BUZhPbcV%2BUz4NlGNkC8kDixY%2FFrjRpBtfSHlZvUdUbaihk4Q7g9aDlGNZbavX%2B46Kit1P5VMcZA0nMlEo8gBpKRU8dVsdIlzst2NdJSad%2Bu7E83cnH%2BijFC22U7Qy3dDBc%2ByPve%2BcNllbXyTK%2FGP4WcUp&X-Amz-Signature=d8abf7e00b6596b207b3911ef318c97b63aa39ea1dddef26b864d3e495d115b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGECCDPW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2By0wf2jNTvoxg26HRRfvmrk6UtnfpESCl27z9wQL1JQIhAI8zVxXZRsZagu6Znivd1YB1HeO0CJJ8djIIjUvCYqgSKv8DCF0QABoMNjM3NDIzMTgzODA1IgyUUej4JfLkS4OHP%2Bwq3ANVQW3EYPC7rHN6FJPPkj%2FeOoQsXOC070b7lPo3aeRnH51atC7lpvEEwB6b0weZ3VMN9gsnULIYQADv6uhCki6KoWddAY0lJq6yn9aI0ALlPFVvV368YUAvW%2FfNOaEDk4YH6REeg1WazW3GohePowi%2FG%2ByqBXXebSByMIlkE%2F6FL2oSZd5XGR6TM7k3Jr9jdn7e%2Bh%2BLGP9ttg%2BDzaz1c0q9%2FJG3pO8pgdV7dvs2%2BzKoLvtPrLjTWqy9VCVheylG1CrnDLvM3JwD0DJ6TX%2F6NQ8sguGFnL3lEgk%2FeNmnGYGBm43PpnA2B7WpoqUSAugWnk1f%2B%2BahIct9mcUrL%2BjpPBSVbad4QipUlWPpm1ntQHwRRO8Rpv32kgF6WI%2FuA1pxIQ3kxXftVWqlYpKQi%2FCY6hiML6HrJttnSLVrCAf1t8VkPHKt21iW%2FavHOFeiQH8ryYG8AwA6qp4svGqPsYnohJnNswR0kx4uk2tZn4yXElnBRGdZ7fFBN7sMo2%2FDjw8SeE05UJ4%2BKvMslIRrH8GvKqzNNPShf6GSCySeXJAQl3Qg5ukuKweUExS30Krz2IAhEV11moQ0aStGe8THOfwO6%2BONHoYFjVzAEoe%2Fkan4E%2B%2F2FZc2yCXxGI0OspgwcDDKiPy9BjqkAUJUDK5%2BY5mNdx1oDFm7i0QBpFSuEtO4T%2B1PyDNa%2FO3PpANMHIuXstwmHrWddD4Xix1%2BUZhPbcV%2BUz4NlGNkC8kDixY%2FFrjRpBtfSHlZvUdUbaihk4Q7g9aDlGNZbavX%2B46Kit1P5VMcZA0nMlEo8gBpKRU8dVsdIlzst2NdJSad%2Bu7E83cnH%2BijFC22U7Qy3dDBc%2ByPve%2BcNllbXyTK%2FGP4WcUp&X-Amz-Signature=2e0b65b04a5610117cfa942669b814ffbbc76d797f804ec7f7888342491e21c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
