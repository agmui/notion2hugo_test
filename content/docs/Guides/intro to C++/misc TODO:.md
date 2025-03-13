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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUITPGLI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeRHw8o54L5Cal6cVSPtM2pXufyb250DSKtZKI8zc32wIgJbLku8g%2BouHDIuRLFnT5gy2%2BbDoZWaMa5yA6TDm0F6cqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpFzprcmYVGPbvYFircA%2BvoY%2BIMV4kVfQa4Y71YFVhfa12XfBjuV0cWmsiOqpJQRWXvpEywY8MN2pJQeAvtw0WAVsNnNWuhav1xGKCi2IxDr7Rq4DTrWF%2B7K%2F4Y36rJD9EP1cfJhh4EXNpbo7IZ5o3Su2XSWa6e%2BsaJ%2FkR4Df7RggcoN7bdwGvtPWSlz6Ys5voiBFFjPaSBquW5ri9DBOHI61CeocW0bfeZX38QzZC2xnYKfQMaBWo7h2KhtnjOErjZ86KRom0oZkzU4DQvnBgtrwB5jrqUIzlIc2nkhbL7JlnCh8feZGkzeKVvrb8vFWlKSDPRRENXo2ZMUYH4bPydwsOeqiWuO7zYJOcs643mz70c88IWzzK%2FZOvVaM8NIqG4DXIARxd6%2FKomzmrT11%2FrPdjgXOghN%2BWEbqlP9rYZVWq7yxQJYRUOiA2qpCMqzl9FOKmkC3Kn0CxZF2u5Jm%2FfOKARN3l1r1rduKzo%2B4qL5o6P2eCZpI5zGWEJCLInqWfjT%2FiU5JDe9RxB7hQ%2BmxC4QHxWxKlVW2HxJKKWigLbudTOXZuuYtXDbS%2BPmResdm%2F0R%2B8QOCqhAkaITMNTcK0hMJcGKNVGIdAuinupTwkRxnKLnWBYwShI%2BH3e2XzDWAqt4cpxwcOtVB5PMJ32zL4GOqUBYn61zzEufmlXH9XJgA0sqX28ab02u6eMoQ0VEj1IE03Jyeydv2%2F3fpixGeIdZgVRgH6az9PiVqmCvBVyGsziy1LiHBkihCZvE%2FbKLL81sdn2zlz3NAgIu5dWUr8LZFQ0XzGpkaHYYWj10t7nMtGKL1OJK6V3zUTCyFJcGE7ikmN6Fjx2V6yLkX99vY%2BH9%2Bn5lYx%2BuGraf6dd7bfyoEtxI3EZFGwU&X-Amz-Signature=eaa2231670884afa6e6cbdb151e9266820f0f89323f22725f98d18379906eaac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUITPGLI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeRHw8o54L5Cal6cVSPtM2pXufyb250DSKtZKI8zc32wIgJbLku8g%2BouHDIuRLFnT5gy2%2BbDoZWaMa5yA6TDm0F6cqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpFzprcmYVGPbvYFircA%2BvoY%2BIMV4kVfQa4Y71YFVhfa12XfBjuV0cWmsiOqpJQRWXvpEywY8MN2pJQeAvtw0WAVsNnNWuhav1xGKCi2IxDr7Rq4DTrWF%2B7K%2F4Y36rJD9EP1cfJhh4EXNpbo7IZ5o3Su2XSWa6e%2BsaJ%2FkR4Df7RggcoN7bdwGvtPWSlz6Ys5voiBFFjPaSBquW5ri9DBOHI61CeocW0bfeZX38QzZC2xnYKfQMaBWo7h2KhtnjOErjZ86KRom0oZkzU4DQvnBgtrwB5jrqUIzlIc2nkhbL7JlnCh8feZGkzeKVvrb8vFWlKSDPRRENXo2ZMUYH4bPydwsOeqiWuO7zYJOcs643mz70c88IWzzK%2FZOvVaM8NIqG4DXIARxd6%2FKomzmrT11%2FrPdjgXOghN%2BWEbqlP9rYZVWq7yxQJYRUOiA2qpCMqzl9FOKmkC3Kn0CxZF2u5Jm%2FfOKARN3l1r1rduKzo%2B4qL5o6P2eCZpI5zGWEJCLInqWfjT%2FiU5JDe9RxB7hQ%2BmxC4QHxWxKlVW2HxJKKWigLbudTOXZuuYtXDbS%2BPmResdm%2F0R%2B8QOCqhAkaITMNTcK0hMJcGKNVGIdAuinupTwkRxnKLnWBYwShI%2BH3e2XzDWAqt4cpxwcOtVB5PMJ32zL4GOqUBYn61zzEufmlXH9XJgA0sqX28ab02u6eMoQ0VEj1IE03Jyeydv2%2F3fpixGeIdZgVRgH6az9PiVqmCvBVyGsziy1LiHBkihCZvE%2FbKLL81sdn2zlz3NAgIu5dWUr8LZFQ0XzGpkaHYYWj10t7nMtGKL1OJK6V3zUTCyFJcGE7ikmN6Fjx2V6yLkX99vY%2BH9%2Bn5lYx%2BuGraf6dd7bfyoEtxI3EZFGwU&X-Amz-Signature=9fb309c3220f50f90ec6eac3b2add353fa09ce9a38c7c0bf6083931213dc80f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
