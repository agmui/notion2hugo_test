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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4IM5S6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDo8a2yR1%2B%2BMtI2Cdhl31izHjkn6sY7Z7MrCJnvD8zN7AiBQaZq64vPe6nYMn0q8NlDtGAFWuz3OCTPHD5zWRku1BCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMqtL7kZRlMS39p0ZAKtwDc9j7Jk5QbvfWG45o77wGaGadi5aOfATOgkFZCUV6bH6Vb203%2FDMa08r8qN%2FHyHum80v4FZ8LL75IwcMnzwdtR0oXom7XFpdW1SHVeMyEU9AwL2WL9gaCLXLzWqYAB6YuL9lxdPGavJmekus9NGjoUHdiRKp6jfjw%2FV2KqTFW0om1EJH5ExIRe6L4w07UgMlN4Pzjxt54BfYna5sjbZuDmj0VnNjzKX67xjLQ7Z15hiFcnZA7bWk%2FlLZD6DnlO26u4Zr8Rdoyl2bIwnOEa6zLc9K9Of9Kwzyi0V5ahn3iyDJQk0DjgNS5slaSVlp9t5zgkKWg9WPDe7BN9deBs3gYmjZPjz2uCerIcCrVTalWeWdLh%2FOIn7dtYeJwuNN5rm0haXuhkwwZbwuF1ZG5GnIZuNjW0IGB8zcjivybyYpzJkmmpgm0f%2FtZt728M8c7EG2DPCXXsRwYGziv8xepM7TFIvBK57YtTX5Omrh55DjgTwXYWTWyvEs1R9evO5UkY0RKpIhIZaWd5DvrSggZqyuxDmmoxB0G57s4IyAr8PsiPv7ArlkbXCaWpkNUQtGf6KOZFYrCHnwbLX6ovyBDUPkGLhO%2Fqy7awg6jNN3GB6APMdafpcwlo0uRoSYftyQw8azfwAY6pgF9uwDW4p4Co0%2FiRKU7Z%2BOo5pAMQ8YkBiVVmCaU7q7CNNSs27SrgtKygojb6InLxIIA0SGj4rA9tYmE4OM1IVEZN47j%2Bwyxuyic5AJd3QmALGw6Ac7KDlJda9fI8d%2Fh8WJ6Ao6Kbju6wEKXTAfiP%2BUMGA0x9ygk8w7uNs0n1kQijanpe%2FLmC1cPfqieLe6optwqAN%2B%2FumzixUPLWizZoHxvJJT0qsiI&X-Amz-Signature=9d85bdd3a0926d1b9c36fdf8633528132665e917aab9d594508a0038cbeab4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4IM5S6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDo8a2yR1%2B%2BMtI2Cdhl31izHjkn6sY7Z7MrCJnvD8zN7AiBQaZq64vPe6nYMn0q8NlDtGAFWuz3OCTPHD5zWRku1BCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMqtL7kZRlMS39p0ZAKtwDc9j7Jk5QbvfWG45o77wGaGadi5aOfATOgkFZCUV6bH6Vb203%2FDMa08r8qN%2FHyHum80v4FZ8LL75IwcMnzwdtR0oXom7XFpdW1SHVeMyEU9AwL2WL9gaCLXLzWqYAB6YuL9lxdPGavJmekus9NGjoUHdiRKp6jfjw%2FV2KqTFW0om1EJH5ExIRe6L4w07UgMlN4Pzjxt54BfYna5sjbZuDmj0VnNjzKX67xjLQ7Z15hiFcnZA7bWk%2FlLZD6DnlO26u4Zr8Rdoyl2bIwnOEa6zLc9K9Of9Kwzyi0V5ahn3iyDJQk0DjgNS5slaSVlp9t5zgkKWg9WPDe7BN9deBs3gYmjZPjz2uCerIcCrVTalWeWdLh%2FOIn7dtYeJwuNN5rm0haXuhkwwZbwuF1ZG5GnIZuNjW0IGB8zcjivybyYpzJkmmpgm0f%2FtZt728M8c7EG2DPCXXsRwYGziv8xepM7TFIvBK57YtTX5Omrh55DjgTwXYWTWyvEs1R9evO5UkY0RKpIhIZaWd5DvrSggZqyuxDmmoxB0G57s4IyAr8PsiPv7ArlkbXCaWpkNUQtGf6KOZFYrCHnwbLX6ovyBDUPkGLhO%2Fqy7awg6jNN3GB6APMdafpcwlo0uRoSYftyQw8azfwAY6pgF9uwDW4p4Co0%2FiRKU7Z%2BOo5pAMQ8YkBiVVmCaU7q7CNNSs27SrgtKygojb6InLxIIA0SGj4rA9tYmE4OM1IVEZN47j%2Bwyxuyic5AJd3QmALGw6Ac7KDlJda9fI8d%2Fh8WJ6Ao6Kbju6wEKXTAfiP%2BUMGA0x9ygk8w7uNs0n1kQijanpe%2FLmC1cPfqieLe6optwqAN%2B%2FumzixUPLWizZoHxvJJT0qsiI&X-Amz-Signature=d26e3c9ca9f7bead1a84f0a5ed5ad983ebbab309faa12ae057c8b1cfba5159bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
