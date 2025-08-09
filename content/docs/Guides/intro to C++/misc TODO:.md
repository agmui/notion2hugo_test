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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOKZ2ZI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID7lVFEG05OUABqvpOJhDlMAttIxdR%2Bx6F1jWhf1wDTYAiEAxDnNq7Xkt7ldn5sXdfrGlWQcmtUcIC48ShgvOoAimhQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXpgge90BpOnzNNjCrcA2zYNRNLsEpSGGZlPVuw73pk3YzspvzSM3broAfCSb1UN4T0sjAvvy9sghKddv3uZxiSKWicXju6A71GeTcFbXogxkoc3A2VWr%2B4d4Y95H199V0JFQger%2B%2F1vlwWL%2BBotui845Da5X9M6TqEGQnjI1HHwHBT6dviFmbEqAv9KcrukFmJhUA%2BL13MhexxyUt2YQGWKMLabC1VtUhgehMljS%2FVu%2FlNURBaYNOnJJnc%2BnL0sa6ACAc7zMtF7wIqsCoMUSSysbvvsrpH6ZYlCC4eON2O0ArGODMQjZrv%2F6Z1CjhNDxmbzMjsMRuJcyTQqtifI6eohT%2BJdKRtbFhgUC%2BeNdNELoxbnqUGiXWMqWSdUXTvUXoRRz6oO5TeaDwX9COWQTMFa70mQleVP9zLXj2HQOdYPOmBnKfc5MPjkeT0kzvrYxp3IO4TRAW79mTVg1FBsx4q0As58gHqHPrb5iWb3e4xvnSZL%2BYdfDkPfkD%2BBIrb59khSyUlz2brVyYrNaPgvVmJgub2qdIxzB97UvwCqDLA5Cgdq65Ywf9X7FVavb5GVgmKDDrjYVwKRGaWnsJzIxzVvXeizTPwitudw4RpteQgrNC%2BtcVXl%2BaFY%2FtTenndfisPoEYwk1nceZ3hMPOf28QGOqUBfWS8%2B6kjo%2FMMqBcTp8d9zpXf%2FoWruXEhK6T6bb2NkwbmTYI4vz8ct2m07IiD7NQqfSujsrYy%2BOWzN68dqShXQVBK0tRoPnzPgftNsdGJ4rKwhoptLPzJZIfvSgdu%2F7skqlX2%2BuKImW0Iwl8L%2FtV0GVNjTfIHKbWxCvjBdBhXGSZuvMzWXBx4%2FjbPNK9s7GUUPQuXAnSWQyoxlV%2BxOIYS1AqjjcJo&X-Amz-Signature=cf2ec142c7b0e846f67c11c5eb7bd01b073128c1086b8c8382193bbfa7e35e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SOKZ2ZI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID7lVFEG05OUABqvpOJhDlMAttIxdR%2Bx6F1jWhf1wDTYAiEAxDnNq7Xkt7ldn5sXdfrGlWQcmtUcIC48ShgvOoAimhQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXpgge90BpOnzNNjCrcA2zYNRNLsEpSGGZlPVuw73pk3YzspvzSM3broAfCSb1UN4T0sjAvvy9sghKddv3uZxiSKWicXju6A71GeTcFbXogxkoc3A2VWr%2B4d4Y95H199V0JFQger%2B%2F1vlwWL%2BBotui845Da5X9M6TqEGQnjI1HHwHBT6dviFmbEqAv9KcrukFmJhUA%2BL13MhexxyUt2YQGWKMLabC1VtUhgehMljS%2FVu%2FlNURBaYNOnJJnc%2BnL0sa6ACAc7zMtF7wIqsCoMUSSysbvvsrpH6ZYlCC4eON2O0ArGODMQjZrv%2F6Z1CjhNDxmbzMjsMRuJcyTQqtifI6eohT%2BJdKRtbFhgUC%2BeNdNELoxbnqUGiXWMqWSdUXTvUXoRRz6oO5TeaDwX9COWQTMFa70mQleVP9zLXj2HQOdYPOmBnKfc5MPjkeT0kzvrYxp3IO4TRAW79mTVg1FBsx4q0As58gHqHPrb5iWb3e4xvnSZL%2BYdfDkPfkD%2BBIrb59khSyUlz2brVyYrNaPgvVmJgub2qdIxzB97UvwCqDLA5Cgdq65Ywf9X7FVavb5GVgmKDDrjYVwKRGaWnsJzIxzVvXeizTPwitudw4RpteQgrNC%2BtcVXl%2BaFY%2FtTenndfisPoEYwk1nceZ3hMPOf28QGOqUBfWS8%2B6kjo%2FMMqBcTp8d9zpXf%2FoWruXEhK6T6bb2NkwbmTYI4vz8ct2m07IiD7NQqfSujsrYy%2BOWzN68dqShXQVBK0tRoPnzPgftNsdGJ4rKwhoptLPzJZIfvSgdu%2F7skqlX2%2BuKImW0Iwl8L%2FtV0GVNjTfIHKbWxCvjBdBhXGSZuvMzWXBx4%2FjbPNK9s7GUUPQuXAnSWQyoxlV%2BxOIYS1AqjjcJo&X-Amz-Signature=db4e81e004f8b6d9e045e3121d52e56b3aa26f9787ab66e96c490b4abb8f957f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
