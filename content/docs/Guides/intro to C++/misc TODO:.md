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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQWT6HUL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCID3z%2F4N8ZFS0GRzzpxNzeYqpGIvhk%2BoJg2g99%2FZKuXxUAiAUSflerP%2BAn0knl4yecHMVoTJ%2B6KJvxoCMUzEaUpoCpSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeYakmtKV279ckeApKtwDzLr9u6YI0GpIOXYPuezvMyzd%2BkUkx%2FjMkqivu4LMawK0DIxYMeTkNPmxAeYrcleDq2LYHvqsXEjXLRgxnng5Dabf0o1FEozj67grbr8Zh9nKOeUkQATMGOaxPB0Ymc8LKZMn64MKZqNqixyNfLq9%2FN%2FBGaclotfjT79SHevPjjA713u21tmsICf%2BOvbfbXEqw40xIqaXz6pe1fQH%2BnFKLPBW1chSR5j7inDHiLQRVOeVxVRyBR5IENggeB4fCifsVxE%2BkzZCXdVHc5o59fUhJTCyFVfehD4hbs67bUMa0ZhUlpt97DFfZ3JXajqOL1YeYkOWMjN%2Fc3Zw%2BluF1%2BpjOv5IFGvkchLZwkOkNDec7TSEQNmKaFDgSuRFzSlD891V7TxrZwSINFYUytsnJCzcOUezpwzVeSWzrZ1fQ3jni5mby0BCcMRy5l61c5fveps3%2Fut3g7R9LHjt4qL0kiqNOYq4QTUBNh3LJd320AtCTEVYU%2FhMHeXZwc59uIojQ7Q7%2BIj9%2BPdv4tftIDt7DqKXE2YTgS7Ql%2BAro9YUoTfMMnbBjwh3XNBvQBExROvTC6d9AE8bw5VRMzEb5SWHTlXynMje7sq6j3uf1ObLhH6r%2FcjpruGHlfaJfOanvzMw2dKxwgY6pgHzMNoS399X6ZxzVBYJkDqe9%2FH8EPVmJxr5EP131XNuEu1Zo4DMZi4la%2Fgl39%2Fb72zZAE3QW951kqBXny2qu%2FWee0LAln1RNXtohk0b2mMgrDrqXZpAi675sE3ciBKVOb9RiGj%2Fh4FOmicUHrw%2BXxVqncrHvk9bktTQq8b8TbP%2BumHie1ltoteJHYzY1%2F1rI44GOc8gxvgZ5wjC36cxTY%2FmIkTHAU66&X-Amz-Signature=8b647ff931b18db2993fc8448087e56e2a8c697e44ffb05c369017bfea5077b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQWT6HUL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCID3z%2F4N8ZFS0GRzzpxNzeYqpGIvhk%2BoJg2g99%2FZKuXxUAiAUSflerP%2BAn0knl4yecHMVoTJ%2B6KJvxoCMUzEaUpoCpSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeYakmtKV279ckeApKtwDzLr9u6YI0GpIOXYPuezvMyzd%2BkUkx%2FjMkqivu4LMawK0DIxYMeTkNPmxAeYrcleDq2LYHvqsXEjXLRgxnng5Dabf0o1FEozj67grbr8Zh9nKOeUkQATMGOaxPB0Ymc8LKZMn64MKZqNqixyNfLq9%2FN%2FBGaclotfjT79SHevPjjA713u21tmsICf%2BOvbfbXEqw40xIqaXz6pe1fQH%2BnFKLPBW1chSR5j7inDHiLQRVOeVxVRyBR5IENggeB4fCifsVxE%2BkzZCXdVHc5o59fUhJTCyFVfehD4hbs67bUMa0ZhUlpt97DFfZ3JXajqOL1YeYkOWMjN%2Fc3Zw%2BluF1%2BpjOv5IFGvkchLZwkOkNDec7TSEQNmKaFDgSuRFzSlD891V7TxrZwSINFYUytsnJCzcOUezpwzVeSWzrZ1fQ3jni5mby0BCcMRy5l61c5fveps3%2Fut3g7R9LHjt4qL0kiqNOYq4QTUBNh3LJd320AtCTEVYU%2FhMHeXZwc59uIojQ7Q7%2BIj9%2BPdv4tftIDt7DqKXE2YTgS7Ql%2BAro9YUoTfMMnbBjwh3XNBvQBExROvTC6d9AE8bw5VRMzEb5SWHTlXynMje7sq6j3uf1ObLhH6r%2FcjpruGHlfaJfOanvzMw2dKxwgY6pgHzMNoS399X6ZxzVBYJkDqe9%2FH8EPVmJxr5EP131XNuEu1Zo4DMZi4la%2Fgl39%2Fb72zZAE3QW951kqBXny2qu%2FWee0LAln1RNXtohk0b2mMgrDrqXZpAi675sE3ciBKVOb9RiGj%2Fh4FOmicUHrw%2BXxVqncrHvk9bktTQq8b8TbP%2BumHie1ltoteJHYzY1%2F1rI44GOc8gxvgZ5wjC36cxTY%2FmIkTHAU66&X-Amz-Signature=030c15b314aa49167efb4b85cae51ba54ae76572d7bdf45e0e27ac460ee9ffe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
