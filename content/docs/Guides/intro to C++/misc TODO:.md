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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHLGJ26%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFN%2Bg7RK5yFPHtLiuRgnto26JAHwgokqwTixFZw0C6RBAiBR1sf0SbyNEhYRhZb8qZ5Qrioty1Doqlxzwd0rncAVZCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMNNZPZZSvPmaNJoK6KtwD1FMiT84Uee8YV4NnNgPdkn3WcVrT8aUwpIPFUPDM858YwDe4ax6QUyCyhfHO1N024DixCKnOje0B9usEL5del7Q7XekgModZSbYL9VvUtu%2Bq7%2FULgx9AKxtMlmJbHEgj1nzDHsNGWgXHiFhSxQcsxf4NdPBg0ADTyNdQwDDncz5T4Jw43Y2fHa5SJlAwuviLh0n5ax6hAYix%2FgSWvwcKAKsb3zWEs3ScncQevafI1bD31w32eAiRnT0Yh6%2B2CUqr6Ivrm9u8l25brVib43KoZKnVr%2BMsGeSCQyB5mpAhfD59kHJDslPQNFxacG8rgSdQHbe%2Fib5TbSmZIqvnt4K%2Bw9O%2FDHIQlR7dmx3ataQ3anpOxzPJtgladLoPRRhn75BknqdJc0z34Pf0roPXoZLM9AxscbD8IpbClAOX3KPgISitKvPaKNHXjLlVsLLJoZg%2FVWe4RJq2FVbd4InQmz4%2BLiLWg1TBRDA4Myh8%2FkGeIz3UrPnP7hbntepB%2BohklEMLZbQ4IlT3HimnpWoaye1DpeIExIFpIu5SoWZqkiwaIwQDhv9JMaUiIV3Box2Pn5gj%2Bu%2FIK3QFCuyggyKBM3tSnf2MECE%2FnzDm8fHTl2dhiNyL%2BFbU5ubTDOUSkuwwvJfgwwY6pgEB8gy83Gf5dr8LTVJeSXLdBVg7Uon70mT%2Bqp1Rz9PNZalmMiYP6kWBALTFcPdSVBNKmDbf4Ia%2FBlJmYZaxm9VYVUwn6Icc6K0XtR7DGs%2F5tD8YwRksc26DtalJYI3iu%2F%2BLfygR30KZdQ7U%2F8yuMeBI5PdN1sRaEMEmK%2Fjb%2FTJOygZAxfw%2BcfeLto43rP8rnIe%2B1sBVqN9X53F5BIpX5J%2FZC%2Bl%2BN3HR&X-Amz-Signature=74b8db3844c577fb916e2ebc6154b930974bca28fe371777196df23bdae81329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHLGJ26%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFN%2Bg7RK5yFPHtLiuRgnto26JAHwgokqwTixFZw0C6RBAiBR1sf0SbyNEhYRhZb8qZ5Qrioty1Doqlxzwd0rncAVZCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMNNZPZZSvPmaNJoK6KtwD1FMiT84Uee8YV4NnNgPdkn3WcVrT8aUwpIPFUPDM858YwDe4ax6QUyCyhfHO1N024DixCKnOje0B9usEL5del7Q7XekgModZSbYL9VvUtu%2Bq7%2FULgx9AKxtMlmJbHEgj1nzDHsNGWgXHiFhSxQcsxf4NdPBg0ADTyNdQwDDncz5T4Jw43Y2fHa5SJlAwuviLh0n5ax6hAYix%2FgSWvwcKAKsb3zWEs3ScncQevafI1bD31w32eAiRnT0Yh6%2B2CUqr6Ivrm9u8l25brVib43KoZKnVr%2BMsGeSCQyB5mpAhfD59kHJDslPQNFxacG8rgSdQHbe%2Fib5TbSmZIqvnt4K%2Bw9O%2FDHIQlR7dmx3ataQ3anpOxzPJtgladLoPRRhn75BknqdJc0z34Pf0roPXoZLM9AxscbD8IpbClAOX3KPgISitKvPaKNHXjLlVsLLJoZg%2FVWe4RJq2FVbd4InQmz4%2BLiLWg1TBRDA4Myh8%2FkGeIz3UrPnP7hbntepB%2BohklEMLZbQ4IlT3HimnpWoaye1DpeIExIFpIu5SoWZqkiwaIwQDhv9JMaUiIV3Box2Pn5gj%2Bu%2FIK3QFCuyggyKBM3tSnf2MECE%2FnzDm8fHTl2dhiNyL%2BFbU5ubTDOUSkuwwvJfgwwY6pgEB8gy83Gf5dr8LTVJeSXLdBVg7Uon70mT%2Bqp1Rz9PNZalmMiYP6kWBALTFcPdSVBNKmDbf4Ia%2FBlJmYZaxm9VYVUwn6Icc6K0XtR7DGs%2F5tD8YwRksc26DtalJYI3iu%2F%2BLfygR30KZdQ7U%2F8yuMeBI5PdN1sRaEMEmK%2Fjb%2FTJOygZAxfw%2BcfeLto43rP8rnIe%2B1sBVqN9X53F5BIpX5J%2FZC%2Bl%2BN3HR&X-Amz-Signature=97c23d489a74cc44f26060f3c8093768c9aef90e5a3f10d83ca520701b01aa77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
