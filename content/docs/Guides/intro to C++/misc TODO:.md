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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZDEA6R%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCbi9eESbqE9GWUYOozQCEXZIsrKs7det2g%2Fu9NM5VbJQIgJKkMeCVWtWINdmZCQ%2Bh%2B%2F2%2F6Iw4TlDj9nnMd849dJm8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3zdR9cqfL6rDwZnircAwAQ7%2BJ%2F3WbpIglYeM9TJY8coVIBo3bWEeHCF2KU0fzB46aGRHKY2bhZQQFpgAqFExVL%2BkHpwtmc4hNGr2ESDkQGP1zCRCkbvWhCdYh6mtysebequyUEY0H48oW6szemli%2Fr4qGOR7DlBtcQCzw0%2FnbvdW9sjSshfa%2Bpx%2FMMw1mWrQ7jciEIkqzjNwa9tgky0ioxNXpgYK6I3Lsl3ZJHIR0ACobNcZ9UzkNcG4%2Bq3jq6p6QP21CdNAAGY2EY0X0qCbhPAo97IFzb4GiTnLOVoc0EVozpf8KG29hwa3Vma%2FIHsDRqKzvgIK%2Ff6fbIe2%2F4YuLsd5vRYR0j9c5MILnx5PxIqyyFkJJ0gkOtT2S91X54mF63TNytKQoogBKg8L7ztR3Q3RonYKnk6UZHDoIRrr5nQvNoZfAz1BOWH11lmxVFA5GwcydM1%2BrtDmjsxJz8QyFQSkas%2BlB3INjQd5%2FYFMEWW%2B006cgkV%2FAbo223%2FHG%2Ft58IX9I7BVhkzG68H506SmHjzTSB%2B6x86mLzY77Z8nTi0b9vr9RfZ09ams%2BXsY8a0m4M%2FQ4Eve3ZZBRBjjt5%2FJ8A3Ftehv4whP5PRunl%2FW3106ZFWiG0vjK01N4GROwcpMuULWPGFLrK8o63MLX62r8GOqUBq7j%2BRLWB2QXpuCTwCU3BthuNHnfqR0CjnoR%2FppG6MQh2dQopsWHIX%2Frt0eFzHoiQKewP735Lh%2B8USX%2BLJN%2BndJ%2BFR4k0drLAa2XJITrIvH8AAP45E2957ve%2B3ln5QmJ2Uxtls5ISM1jbyFjRmrdTDtt7u5bZvYkNmTAD2CLSp3Q8yBEQpPjF1%2B2YrJ%2BJkOJh9TA93Hz1THvRKLfPzKWsNbcgplT0&X-Amz-Signature=7d97d793593e21103b4a8ed4e2c18b0ec13d14e258c46e1b99c548d60de0290a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZDEA6R%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCbi9eESbqE9GWUYOozQCEXZIsrKs7det2g%2Fu9NM5VbJQIgJKkMeCVWtWINdmZCQ%2Bh%2B%2F2%2F6Iw4TlDj9nnMd849dJm8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3zdR9cqfL6rDwZnircAwAQ7%2BJ%2F3WbpIglYeM9TJY8coVIBo3bWEeHCF2KU0fzB46aGRHKY2bhZQQFpgAqFExVL%2BkHpwtmc4hNGr2ESDkQGP1zCRCkbvWhCdYh6mtysebequyUEY0H48oW6szemli%2Fr4qGOR7DlBtcQCzw0%2FnbvdW9sjSshfa%2Bpx%2FMMw1mWrQ7jciEIkqzjNwa9tgky0ioxNXpgYK6I3Lsl3ZJHIR0ACobNcZ9UzkNcG4%2Bq3jq6p6QP21CdNAAGY2EY0X0qCbhPAo97IFzb4GiTnLOVoc0EVozpf8KG29hwa3Vma%2FIHsDRqKzvgIK%2Ff6fbIe2%2F4YuLsd5vRYR0j9c5MILnx5PxIqyyFkJJ0gkOtT2S91X54mF63TNytKQoogBKg8L7ztR3Q3RonYKnk6UZHDoIRrr5nQvNoZfAz1BOWH11lmxVFA5GwcydM1%2BrtDmjsxJz8QyFQSkas%2BlB3INjQd5%2FYFMEWW%2B006cgkV%2FAbo223%2FHG%2Ft58IX9I7BVhkzG68H506SmHjzTSB%2B6x86mLzY77Z8nTi0b9vr9RfZ09ams%2BXsY8a0m4M%2FQ4Eve3ZZBRBjjt5%2FJ8A3Ftehv4whP5PRunl%2FW3106ZFWiG0vjK01N4GROwcpMuULWPGFLrK8o63MLX62r8GOqUBq7j%2BRLWB2QXpuCTwCU3BthuNHnfqR0CjnoR%2FppG6MQh2dQopsWHIX%2Frt0eFzHoiQKewP735Lh%2B8USX%2BLJN%2BndJ%2BFR4k0drLAa2XJITrIvH8AAP45E2957ve%2B3ln5QmJ2Uxtls5ISM1jbyFjRmrdTDtt7u5bZvYkNmTAD2CLSp3Q8yBEQpPjF1%2B2YrJ%2BJkOJh9TA93Hz1THvRKLfPzKWsNbcgplT0&X-Amz-Signature=5b3d3c3ae380070efe407b0f675946d4eddcbc2474e93aa00db620e07919bec6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
