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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYUPHS3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfjrazrbJJpy8L8utlx1KOkbRI7znTpdjImphtGM%2FJLQIgWhBZ8U84FLWHMzZJ08abA3bNtxz4E0yX3%2Fy0E85k5V0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJRq3IbTQunoEC46zCrcA2ZzuLl1hdFJfZH1CzW8TNkyIta9BihVXM%2FcxX3uo7yzcf5D8effd%2FiObs9AWHgzKC9zZbnmEwBb3DTn13xaY8fB0nQwYQveWIBj%2F38%2F6Q2yZr3kESN5TVzpkaQcaxRgW%2Bv%2FV3oVOFezWeF%2BRIJkshr7U6dARbR2aDcs%2FQfT2cVjcrYjIhewR%2BBfU8wzeldbk3bynuiodkTka8E5HYu1q97Cjq5QCrJT5Z2%2FTqz1JDQ6WLZcPKOxocQCGFf%2Bpds9EZ2w73Mke67U7ZRnCSI37ZorYUYSHvPtBH7MYvZbDSLs%2FoPYd0kwM1sENOHvXhN3%2Bn65eETngBsquXG761JedFx%2BrvRz46nmAoI1SRkvPVKMQW14Z1eg1I5EmQcj6mtelLA%2Bt0rWFD7cj%2FOmlzjvX5sg%2FXUI7jjvN%2FtScES2VkHVqEy780vZhL6wYZjQKCWcxzCjLfI5HnAhdvNL2oF3D6%2FsKY82HtBqStkwy%2BBYVWrEbPkRkesKYIZOGKEjWdDHg9yKMnMvMFF2ujH4spCdvQ2d2beF47RhCyTbtRxi%2BGdm3OEMu92wydX3KLtdVxih4XYo74j80wwYQPra%2F6yter9juiuE3%2FA9tINTN%2BSveMCQiBUuNkxT%2BsI4K2loMNOQ1cEGOqUB4jlgUQiv0hhQfn89Wo2rdFyY8qiYNSEX9ulJHbQa0gYK6eSvLTrrDAm0jvOKRIfsH12S9BvaBjEORJscevJ95X6iKKcZq4nqDvbtJ73d05lLbB1eF9cRinCwc8GqTa%2Fg%2FfpPZ%2Bjgvj3RqFCuTL9qXxXP1JKNNPE4zm1azRjJ3uv9X1yafRdRFfxjwDTGJwCK9Gby20yqS9K7754FXtvZzJdxC503&X-Amz-Signature=97fbd2af5623f60e6a88768b404992f46cecb13ede2a4f3107de2cf4be7901c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYUPHS3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfjrazrbJJpy8L8utlx1KOkbRI7znTpdjImphtGM%2FJLQIgWhBZ8U84FLWHMzZJ08abA3bNtxz4E0yX3%2Fy0E85k5V0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJRq3IbTQunoEC46zCrcA2ZzuLl1hdFJfZH1CzW8TNkyIta9BihVXM%2FcxX3uo7yzcf5D8effd%2FiObs9AWHgzKC9zZbnmEwBb3DTn13xaY8fB0nQwYQveWIBj%2F38%2F6Q2yZr3kESN5TVzpkaQcaxRgW%2Bv%2FV3oVOFezWeF%2BRIJkshr7U6dARbR2aDcs%2FQfT2cVjcrYjIhewR%2BBfU8wzeldbk3bynuiodkTka8E5HYu1q97Cjq5QCrJT5Z2%2FTqz1JDQ6WLZcPKOxocQCGFf%2Bpds9EZ2w73Mke67U7ZRnCSI37ZorYUYSHvPtBH7MYvZbDSLs%2FoPYd0kwM1sENOHvXhN3%2Bn65eETngBsquXG761JedFx%2BrvRz46nmAoI1SRkvPVKMQW14Z1eg1I5EmQcj6mtelLA%2Bt0rWFD7cj%2FOmlzjvX5sg%2FXUI7jjvN%2FtScES2VkHVqEy780vZhL6wYZjQKCWcxzCjLfI5HnAhdvNL2oF3D6%2FsKY82HtBqStkwy%2BBYVWrEbPkRkesKYIZOGKEjWdDHg9yKMnMvMFF2ujH4spCdvQ2d2beF47RhCyTbtRxi%2BGdm3OEMu92wydX3KLtdVxih4XYo74j80wwYQPra%2F6yter9juiuE3%2FA9tINTN%2BSveMCQiBUuNkxT%2BsI4K2loMNOQ1cEGOqUB4jlgUQiv0hhQfn89Wo2rdFyY8qiYNSEX9ulJHbQa0gYK6eSvLTrrDAm0jvOKRIfsH12S9BvaBjEORJscevJ95X6iKKcZq4nqDvbtJ73d05lLbB1eF9cRinCwc8GqTa%2Fg%2FfpPZ%2Bjgvj3RqFCuTL9qXxXP1JKNNPE4zm1azRjJ3uv9X1yafRdRFfxjwDTGJwCK9Gby20yqS9K7754FXtvZzJdxC503&X-Amz-Signature=22eccfbd77f24bb712572fa6f7d7854603132da877790df884cdc4f7b0d7bb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
