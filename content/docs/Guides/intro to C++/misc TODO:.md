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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBIEWZT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjlPbPSZyYmHdsA65wzQRb%2FKJo2XGg1orXC7CyvtcfGAIhAOPEg3t1clJ8EKXfniz6ogg%2FJwClGkJqvHQBYG3EGGoOKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzygGMOJWj9Tupafooq3ANMiCjmJ9pyzjZr%2BeDeoAK8rMtltBlJh0uN2Ikf147B3wTD3IP3IYUP40rfVFzUNS8sucLvz0N5Q0uJ%2F5uFQ8wtSXdQhmaXJRZzE7eFarCRYpXaUzq8uCMX6jnhP4mHhO3%2B%2BPryK8UdWsPbjOGW9Itd3ZvXpxxmXymgy1wJXOJuQUhnK9rkbqVtiCBw3CiEGhOk45AdaZW%2FeQmMxBWedjgz2StgDudmBMiWn6Y9N0plKihPG%2FF3ABTHJON3SYn9ylEJMsFoQeMk86JFBoQ3O1V7p1xtvq4GPJglbQsP46FvHXlXx7KEDRG6TsTfe1C0U%2FNMBVqHcsiV9ol%2BCB5E0pv2PJhHn%2Boley%2FyeFBIWlFb0ayL4AyYeyig7G9OJzZKPCFBaw%2BA7rjZbpc7IivWTMhDlSvm%2FvL5PYhGDftkcuBXhZC4plvl%2BVDLUdfTtukEdQI2J3cEmb9RJo0Zmt7zIYhAchQqq%2F9J45hvIhfUsX3qO1ajtlWeMxbp4QyaGVsdglVZOpD%2BUeKuUa9xZoIrf%2FmBJmSCRElic7vaJVmpdN3QSbe1V31oUd53WudA1s9ITX%2B7c%2B25BMTxsiRg9%2F%2FIQk7AsEr%2FNSgCwf5xIKpMPxv%2BLm3EYOiLSmmmrhs1MTDq%2BdjCBjqkAdeNEzjkSk4Tfjw3FMKoBMPU3wWaVOmFNOAZkUpsxfgakTT5Tkc5lMgXrv0sz5W1G7yWfoNO%2FbbcIB9D0k%2BuBX2xl5U610d2Wg9tpELAnnGyO7TwEW%2F6ZNzWkSUqK7lMkXpvOI67YnwtLujZDMiqOqumGLzvYtA0HmC44nMmCVmbmmwlb7%2FltLJT9vn2DjxL31n6qG0C%2BAnqz1p7BRY8PQ%2FBefov&X-Amz-Signature=9048ffbca13bb7d13e2a0c1b153290f66559da55dcdc271e35c36f53f9e9b941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBIEWZT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjlPbPSZyYmHdsA65wzQRb%2FKJo2XGg1orXC7CyvtcfGAIhAOPEg3t1clJ8EKXfniz6ogg%2FJwClGkJqvHQBYG3EGGoOKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzygGMOJWj9Tupafooq3ANMiCjmJ9pyzjZr%2BeDeoAK8rMtltBlJh0uN2Ikf147B3wTD3IP3IYUP40rfVFzUNS8sucLvz0N5Q0uJ%2F5uFQ8wtSXdQhmaXJRZzE7eFarCRYpXaUzq8uCMX6jnhP4mHhO3%2B%2BPryK8UdWsPbjOGW9Itd3ZvXpxxmXymgy1wJXOJuQUhnK9rkbqVtiCBw3CiEGhOk45AdaZW%2FeQmMxBWedjgz2StgDudmBMiWn6Y9N0plKihPG%2FF3ABTHJON3SYn9ylEJMsFoQeMk86JFBoQ3O1V7p1xtvq4GPJglbQsP46FvHXlXx7KEDRG6TsTfe1C0U%2FNMBVqHcsiV9ol%2BCB5E0pv2PJhHn%2Boley%2FyeFBIWlFb0ayL4AyYeyig7G9OJzZKPCFBaw%2BA7rjZbpc7IivWTMhDlSvm%2FvL5PYhGDftkcuBXhZC4plvl%2BVDLUdfTtukEdQI2J3cEmb9RJo0Zmt7zIYhAchQqq%2F9J45hvIhfUsX3qO1ajtlWeMxbp4QyaGVsdglVZOpD%2BUeKuUa9xZoIrf%2FmBJmSCRElic7vaJVmpdN3QSbe1V31oUd53WudA1s9ITX%2B7c%2B25BMTxsiRg9%2F%2FIQk7AsEr%2FNSgCwf5xIKpMPxv%2BLm3EYOiLSmmmrhs1MTDq%2BdjCBjqkAdeNEzjkSk4Tfjw3FMKoBMPU3wWaVOmFNOAZkUpsxfgakTT5Tkc5lMgXrv0sz5W1G7yWfoNO%2FbbcIB9D0k%2BuBX2xl5U610d2Wg9tpELAnnGyO7TwEW%2F6ZNzWkSUqK7lMkXpvOI67YnwtLujZDMiqOqumGLzvYtA0HmC44nMmCVmbmmwlb7%2FltLJT9vn2DjxL31n6qG0C%2BAnqz1p7BRY8PQ%2FBefov&X-Amz-Signature=5a218ad4a741ea4c4d350bdc36ab18f2066e93463216e09e85788e400a597381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
