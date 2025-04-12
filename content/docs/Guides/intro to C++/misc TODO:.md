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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKEGJAVQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICKFYL4kVJTuLo661zzifQo7GtlUOR9FeNTNKRIbIXHOAiAOrQOhXHegpE6moB1ONhM%2Fug3OIjnbJ2qRYA2lxOc9ASqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMna98Zr5qc%2Fy1MBLHKtwD7k7wCDp30dkOmBXHz3GrT8BQ6W52EVWYT3mhNAz8PSNKIdAsesygYrsIoXhXu%2BHSjievR%2FLwNE7edD87GekeP2ulEt2V6AWz34wFxmZ7%2FueO5x4ldXuEu9DGdKQFSp9MkHQaNykoUTTA0dzcUU1cPp%2FHtSmB2FuEzyYJhhceXpDAVCIodmwUcxkN0Xzo5STBq7hu9VilGLlRN1qu53uRhBbtaBicqCejxZmpzWsddrLJGHBxrhrjNt9HMjIJyFvROkEAE8bwAeU%2Fir7vc8jIwsEZcGz1%2BOtK5h6zzN4DvaEge8SHdZowvdRuhRbOwBmYNz%2Bq2WuQM9mFEzwgaBt6fcJDeCug3Z4PdL6E0XeLEsBpuqHIc7BXp62VYiPB248GOtm%2BEAGJT2FykH1lVZEEU5Ha%2BMCTOgEfks%2BDg9zpeK3%2Fu9tOo%2FFwFYGRFZBxMfPHG4iKxa76F%2F6vCQs1t98p0fd516Y3Sl5HyPSB4QjTqFyQuoetrpPLsVatu1gE%2FIp5JdSD4PFy%2BOQWuOEOQHCoHXrvQlSVVIbeevcs9%2FNnDly4RVG37cNNkemswrfvYVrXdhGuuc87V6LXy806eTy030p9ZZBFA574MAVDrVC9JJ477Tsty%2BnO7FSKiG4wq%2FvpvwY6pgGZ0trKwK0B07OFmZZf9sHhbbifB1DHA%2BXOk4M%2B2h3vX%2BcLmMIwXbrFbGhE0hgsqULWZpO0ZxjKcWEpgY4SwNfsaKpJj%2F2fWp5LZlV4A%2BPRVfaOAYQKm9JZYdzyy52tya7IiqAtSJQXO%2B9gtKErSqYD8v5rVujmAaxdtQ7%2F6HfulZ9K8luI1Gr5L5KyJfLOUVf09PlM3pERUs9gQKP2ezr6sfVQyC62&X-Amz-Signature=c50dc3900f5f0874d06d10701e402264d692470e0a55c4584f8f4756a26a74d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKEGJAVQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICKFYL4kVJTuLo661zzifQo7GtlUOR9FeNTNKRIbIXHOAiAOrQOhXHegpE6moB1ONhM%2Fug3OIjnbJ2qRYA2lxOc9ASqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMna98Zr5qc%2Fy1MBLHKtwD7k7wCDp30dkOmBXHz3GrT8BQ6W52EVWYT3mhNAz8PSNKIdAsesygYrsIoXhXu%2BHSjievR%2FLwNE7edD87GekeP2ulEt2V6AWz34wFxmZ7%2FueO5x4ldXuEu9DGdKQFSp9MkHQaNykoUTTA0dzcUU1cPp%2FHtSmB2FuEzyYJhhceXpDAVCIodmwUcxkN0Xzo5STBq7hu9VilGLlRN1qu53uRhBbtaBicqCejxZmpzWsddrLJGHBxrhrjNt9HMjIJyFvROkEAE8bwAeU%2Fir7vc8jIwsEZcGz1%2BOtK5h6zzN4DvaEge8SHdZowvdRuhRbOwBmYNz%2Bq2WuQM9mFEzwgaBt6fcJDeCug3Z4PdL6E0XeLEsBpuqHIc7BXp62VYiPB248GOtm%2BEAGJT2FykH1lVZEEU5Ha%2BMCTOgEfks%2BDg9zpeK3%2Fu9tOo%2FFwFYGRFZBxMfPHG4iKxa76F%2F6vCQs1t98p0fd516Y3Sl5HyPSB4QjTqFyQuoetrpPLsVatu1gE%2FIp5JdSD4PFy%2BOQWuOEOQHCoHXrvQlSVVIbeevcs9%2FNnDly4RVG37cNNkemswrfvYVrXdhGuuc87V6LXy806eTy030p9ZZBFA574MAVDrVC9JJ477Tsty%2BnO7FSKiG4wq%2FvpvwY6pgGZ0trKwK0B07OFmZZf9sHhbbifB1DHA%2BXOk4M%2B2h3vX%2BcLmMIwXbrFbGhE0hgsqULWZpO0ZxjKcWEpgY4SwNfsaKpJj%2F2fWp5LZlV4A%2BPRVfaOAYQKm9JZYdzyy52tya7IiqAtSJQXO%2B9gtKErSqYD8v5rVujmAaxdtQ7%2F6HfulZ9K8luI1Gr5L5KyJfLOUVf09PlM3pERUs9gQKP2ezr6sfVQyC62&X-Amz-Signature=bb69c994d2dfd66cd091e72505553c266369b30d450de058668de87a92b69874&X-Amz-SignedHeaders=host&x-id=GetObject)

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
