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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB35CM52%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOGzayWSZJfmLH2UsBRDjkdWZnJ4W%2FDCoP2ZXV7AWfSAiBq9JOrQA2wwXKG4MdldfwT%2BHeVkWLq59u%2FcO%2FdTo8K2CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZPm3Jl8U3Aa6BKCCKtwDHZUW1gkebs4jszK7vPm2skdORF5n9qP1P7dTGkLKOrp9IYPBz2xTfXjLFBMppP%2FKBgSGyCswlT8ZbFiA2Ve6Qz6D%2Fhch6CtoqP7MgneF1YXHe2B2%2F%2FUobdFr693PWH2yAMp2oOU5xwLPHYyHLKKADmkqS5SIXUKcwLM%2FhOY8kv%2F6pta6TcF5xFrEhsILKIqzpc7mmJ%2FPM6L19YPJ8jyMkTH%2FZgOG0u%2FYHb5J1w3Fu7lG9ofuvPCwyIM2InY%2FwAtB9cLyQnJ8%2Bo%2BhCv7Y%2FhZ2gOt9TYa75%2FpspEyhOxjyEj5sRMQBPjuS8U9MGwfvot5WYsDNbhHqn7pRBCToh1G68kv1Ovr2vTtCgmRMgyTH3gpXJbJJuRwJOFZvqV3J71ZE1FVQirfZL6O9hvvB16arcTU2Pa6I4Jez3Sxi5nvPhZ1jjUWh3lYjgi6ZHOzgHLO%2Bt5EUQ%2FIk8PlhtlKgFu4%2BDGN6QrlVLwwzlJn3sE9Qeo0X%2BTfbsYERSyNS3a6bQqctY8lcbodh3MauaWZUlNtGDqHDE7Zc%2BG%2BIOqWL5eTkxoqzlKQzSQyyBc1wVEZZnvzQ5jh2GcXVdfiqaOGQLWWSHCLANzvur%2FcNLfA%2B6abY34fHmXdH8Srrng%2BaBtsw0bvJvgY6pgGIhWX9nhq4ZYm6wNOmM%2BZM6GvDdWlWvGkCCFTL1dje%2BhTqap9eCr3CNaXVWkgeMvPGshl4JPEigNjUKpFlMyTtuNncGyMr30chgB2UBBOqjW0Mc2JjBfR1DPOK%2FF8nlQiVzKMMVhjwNeebqht0KRoyVBcwjyFvYQKsvSykgow%2BWr6q%2FrYvvx%2FsbeyMEW8Ru7uN0JdahE4kpgME2N1l9rDjnvJ7p1eS&X-Amz-Signature=9f9eeb9b59c3490f266209639e00815c160fbaab196c53bb431935b18725360d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB35CM52%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOGzayWSZJfmLH2UsBRDjkdWZnJ4W%2FDCoP2ZXV7AWfSAiBq9JOrQA2wwXKG4MdldfwT%2BHeVkWLq59u%2FcO%2FdTo8K2CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZPm3Jl8U3Aa6BKCCKtwDHZUW1gkebs4jszK7vPm2skdORF5n9qP1P7dTGkLKOrp9IYPBz2xTfXjLFBMppP%2FKBgSGyCswlT8ZbFiA2Ve6Qz6D%2Fhch6CtoqP7MgneF1YXHe2B2%2F%2FUobdFr693PWH2yAMp2oOU5xwLPHYyHLKKADmkqS5SIXUKcwLM%2FhOY8kv%2F6pta6TcF5xFrEhsILKIqzpc7mmJ%2FPM6L19YPJ8jyMkTH%2FZgOG0u%2FYHb5J1w3Fu7lG9ofuvPCwyIM2InY%2FwAtB9cLyQnJ8%2Bo%2BhCv7Y%2FhZ2gOt9TYa75%2FpspEyhOxjyEj5sRMQBPjuS8U9MGwfvot5WYsDNbhHqn7pRBCToh1G68kv1Ovr2vTtCgmRMgyTH3gpXJbJJuRwJOFZvqV3J71ZE1FVQirfZL6O9hvvB16arcTU2Pa6I4Jez3Sxi5nvPhZ1jjUWh3lYjgi6ZHOzgHLO%2Bt5EUQ%2FIk8PlhtlKgFu4%2BDGN6QrlVLwwzlJn3sE9Qeo0X%2BTfbsYERSyNS3a6bQqctY8lcbodh3MauaWZUlNtGDqHDE7Zc%2BG%2BIOqWL5eTkxoqzlKQzSQyyBc1wVEZZnvzQ5jh2GcXVdfiqaOGQLWWSHCLANzvur%2FcNLfA%2B6abY34fHmXdH8Srrng%2BaBtsw0bvJvgY6pgGIhWX9nhq4ZYm6wNOmM%2BZM6GvDdWlWvGkCCFTL1dje%2BhTqap9eCr3CNaXVWkgeMvPGshl4JPEigNjUKpFlMyTtuNncGyMr30chgB2UBBOqjW0Mc2JjBfR1DPOK%2FF8nlQiVzKMMVhjwNeebqht0KRoyVBcwjyFvYQKsvSykgow%2BWr6q%2FrYvvx%2FsbeyMEW8Ru7uN0JdahE4kpgME2N1l9rDjnvJ7p1eS&X-Amz-Signature=38891ba2d7e0f01590ee48aa62460d45f6eb647b877db877e45e4e35c3b7e244&X-Amz-SignedHeaders=host&x-id=GetObject)

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
