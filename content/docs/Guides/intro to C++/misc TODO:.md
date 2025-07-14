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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APBQYHS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBRXIa014mgv48ff0h1K2lzeuJ4HRiltgH8013jQAYtZAiEAk%2BSXtmdMj9TOSZfyOowsZuVDv4bCYlkW745VAzyGlhMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMo2iZGgwfYYTpEY%2FSrcAxrebvtB6Zo2M%2BXC4z5q02sXCYPd2BIL3wfIjXX%2FxAryVZIA9TsktM5BRCxYpMfALTS7i0YiQv3hSWT%2F1yonBKcDneqxwuFruv94IbjGdxv1VPnKz06BEgoffZRXibisD5aiYe%2FBjqZ1SRLXk6a6xIxf5WV746pV60kUHU%2FFgORIWeiSOn%2BzaPn%2B5kXH6aKH6nhWtw0Lak%2FA2leSmDrAU9KkysBggF6OaJ%2FVsQVY%2Fwq5xlbSDV39kwufaIu0vv5SXoFvv2ZB48iPvaL3rV%2FbmmvN6ThuBI7GmbWn8BPw4XTY6FcpvKsOgr0LCT5u8peEW9AIQW0ymO7YXM4pCemDVjmxGo7qysbrsWiP62TFSJP2hZgfKVGxYm5M0YlievNmOURNmTi2Ey5P22U0Mb8hpxSDyfZqicsMMMdZ2oh2Kh9tUzDffY2RoLvSniyeNkJ%2Bv5AikRowW3VIw6ILj6qu3elOan95UN%2FEUA5WCE%2F%2BhI3HEHvqOt77baTCnf0YxvEhbjjGsdyU1Q1VkdmwPHKVddbXXF7U3bisKiO7ix1lpFZeQaDs%2BEnGlKfQLRPkxWa%2FDKVlsCh1LJlzlRayXSu5w7MOAb9jRN9sjYl%2BL81Vf1JwvD4ZZz4c6DxeSmI9MKaV08MGOqUBkYadLw7MyMDmNLE%2BslmMrE5LfBc5%2FMI6rlW1HgAOGmVWZoi8KIbjmpzc0qOFHKfQHgBeIEyImvQoah8%2Fq8Jd%2BVLLmD%2FypadZBI6f%2BFRjoqpaqoAy8Ll1TuvhmKLL7tNdHqi%2B5sQ1OVpjftiPtmo0lhiyr9b1hp3Gtk0bZBM9x%2FZMxmwWXandc%2F1a7MJ1Ym3yP4xviYo9GB6Utv7wGw4%2FR09OF%2BFH&X-Amz-Signature=6f00d900b32b8a72ae738a4dee32dfc168bd09c1e48aa137aa94911d75d2a28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APBQYHS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBRXIa014mgv48ff0h1K2lzeuJ4HRiltgH8013jQAYtZAiEAk%2BSXtmdMj9TOSZfyOowsZuVDv4bCYlkW745VAzyGlhMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMo2iZGgwfYYTpEY%2FSrcAxrebvtB6Zo2M%2BXC4z5q02sXCYPd2BIL3wfIjXX%2FxAryVZIA9TsktM5BRCxYpMfALTS7i0YiQv3hSWT%2F1yonBKcDneqxwuFruv94IbjGdxv1VPnKz06BEgoffZRXibisD5aiYe%2FBjqZ1SRLXk6a6xIxf5WV746pV60kUHU%2FFgORIWeiSOn%2BzaPn%2B5kXH6aKH6nhWtw0Lak%2FA2leSmDrAU9KkysBggF6OaJ%2FVsQVY%2Fwq5xlbSDV39kwufaIu0vv5SXoFvv2ZB48iPvaL3rV%2FbmmvN6ThuBI7GmbWn8BPw4XTY6FcpvKsOgr0LCT5u8peEW9AIQW0ymO7YXM4pCemDVjmxGo7qysbrsWiP62TFSJP2hZgfKVGxYm5M0YlievNmOURNmTi2Ey5P22U0Mb8hpxSDyfZqicsMMMdZ2oh2Kh9tUzDffY2RoLvSniyeNkJ%2Bv5AikRowW3VIw6ILj6qu3elOan95UN%2FEUA5WCE%2F%2BhI3HEHvqOt77baTCnf0YxvEhbjjGsdyU1Q1VkdmwPHKVddbXXF7U3bisKiO7ix1lpFZeQaDs%2BEnGlKfQLRPkxWa%2FDKVlsCh1LJlzlRayXSu5w7MOAb9jRN9sjYl%2BL81Vf1JwvD4ZZz4c6DxeSmI9MKaV08MGOqUBkYadLw7MyMDmNLE%2BslmMrE5LfBc5%2FMI6rlW1HgAOGmVWZoi8KIbjmpzc0qOFHKfQHgBeIEyImvQoah8%2Fq8Jd%2BVLLmD%2FypadZBI6f%2BFRjoqpaqoAy8Ll1TuvhmKLL7tNdHqi%2B5sQ1OVpjftiPtmo0lhiyr9b1hp3Gtk0bZBM9x%2FZMxmwWXandc%2F1a7MJ1Ym3yP4xviYo9GB6Utv7wGw4%2FR09OF%2BFH&X-Amz-Signature=678e63b9df31b01586924a2c04ef863ccbad881070ac97614228b4abde312c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
