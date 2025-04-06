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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGROJ4F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsfGutGa1%2F%2BqNq3yXAurlyMTwVmY0FKN2%2Bl6zLLgWjEgIhAI8nZiF9b9STGB5LfxXqoLZE1kVtuSEWqdzcKaE4dbu7Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxrH5mmHmclIeOiPUwq3ANzkpDCKGlUySmF3x2bRYLFLGy40opK4CXkpdkApbtD%2Bn8ah5tR%2FIlRQVYoasoPPUySkqd5RuBXpT7CHWp0%2Fz2zTYprUJ%2Ba%2BCJv7tCBrjS%2FadlpvOG7qE8HB%2B1%2FVmpABoZW0gOPpH2jAdVZB26mfRWhbx1h88aCc%2FRwaX6furPBRZr%2FVf%2B7WuPjZfM4j83C8%2BVNqYJjOyea8wvst1e%2BJKUIifkN7fjB3sP9PFCYqOYWk%2BHKoxnBaHixEKJ1QO9A%2BNxTZnRIjhSBHrYoro9cPuKqN%2BpL84Cdp9kW1Tp930l%2FzeOUmyurE6uTuI6qbXZZ1rTwNjN5grpm4Xlck%2FUyRp4OQxlWF6%2FO8YFRJiUXsYoSrWmQ10Zb4RjqoUtWyUo3C%2B5yze6M%2FXoQVzzwMOsmjwrkXgaJI5m5c19Hs982gC5EFalOFovGvb9bnsBJRem5rmXydHp6GQlqQiYB7%2Bg3UQCRKlYsl16CEwoRXYFdI1H9xuqoa6QljsJKN1Go%2B4Y4UzcmYeooopnBy9qFNRZAIRjiXcecNHxNf%2FuoOLJGBWcbzH6HcqA6Ohzpg0PxWJDrzAkpsYA7hp1uk33hjonzWGMoQGrJ5ekcOmmkIGXk5IiecnWTPnZBs9U7TCLpUjC4n8q%2FBjqkATyqwLVwPj6oRmNiym8nTmxI80JJV4vef1qrwqn6VPdBdenzOAFseZd6lBmbl0rzsAYT4ZhVNQ2fHs6z%2BOMZw0hEOhYFZbgwX%2BwsTUzQJjHhCJfnnsGEYDSvjr6dG78fhBEs2TPIDoEqyv3PWie91lfNjuoNQi2piQTiANi63SHbpuZtQHPVlri6kjhMs1LWfQ%2BZDyIYPdF3HreKGr9IGUhQdFmG&X-Amz-Signature=e6a2cb73e46e695ccfacfa0ba7343877156e0ede202b42d69cc6b40aff41f28d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGROJ4F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsfGutGa1%2F%2BqNq3yXAurlyMTwVmY0FKN2%2Bl6zLLgWjEgIhAI8nZiF9b9STGB5LfxXqoLZE1kVtuSEWqdzcKaE4dbu7Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxrH5mmHmclIeOiPUwq3ANzkpDCKGlUySmF3x2bRYLFLGy40opK4CXkpdkApbtD%2Bn8ah5tR%2FIlRQVYoasoPPUySkqd5RuBXpT7CHWp0%2Fz2zTYprUJ%2Ba%2BCJv7tCBrjS%2FadlpvOG7qE8HB%2B1%2FVmpABoZW0gOPpH2jAdVZB26mfRWhbx1h88aCc%2FRwaX6furPBRZr%2FVf%2B7WuPjZfM4j83C8%2BVNqYJjOyea8wvst1e%2BJKUIifkN7fjB3sP9PFCYqOYWk%2BHKoxnBaHixEKJ1QO9A%2BNxTZnRIjhSBHrYoro9cPuKqN%2BpL84Cdp9kW1Tp930l%2FzeOUmyurE6uTuI6qbXZZ1rTwNjN5grpm4Xlck%2FUyRp4OQxlWF6%2FO8YFRJiUXsYoSrWmQ10Zb4RjqoUtWyUo3C%2B5yze6M%2FXoQVzzwMOsmjwrkXgaJI5m5c19Hs982gC5EFalOFovGvb9bnsBJRem5rmXydHp6GQlqQiYB7%2Bg3UQCRKlYsl16CEwoRXYFdI1H9xuqoa6QljsJKN1Go%2B4Y4UzcmYeooopnBy9qFNRZAIRjiXcecNHxNf%2FuoOLJGBWcbzH6HcqA6Ohzpg0PxWJDrzAkpsYA7hp1uk33hjonzWGMoQGrJ5ekcOmmkIGXk5IiecnWTPnZBs9U7TCLpUjC4n8q%2FBjqkATyqwLVwPj6oRmNiym8nTmxI80JJV4vef1qrwqn6VPdBdenzOAFseZd6lBmbl0rzsAYT4ZhVNQ2fHs6z%2BOMZw0hEOhYFZbgwX%2BwsTUzQJjHhCJfnnsGEYDSvjr6dG78fhBEs2TPIDoEqyv3PWie91lfNjuoNQi2piQTiANi63SHbpuZtQHPVlri6kjhMs1LWfQ%2BZDyIYPdF3HreKGr9IGUhQdFmG&X-Amz-Signature=33fb4faa1d378b6c01909180b454502de4d276808199629a624b72d31b2f0c05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
