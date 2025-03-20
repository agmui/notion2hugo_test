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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOXKXLE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIExW6sJQv7hYLVy03PieV1%2F29NjzGPVjj8xA%2F0lQ6gkjAiABdfJYVK%2BHcQyMhXxmWx1M1af7kai%2FTgRWf%2FnaOIcDFSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7OZIRqG7VT6Wl2hQKtwD3csTmPzJm0NoYrrtJY2mHY74i8G%2BYpzvI6OcO%2FebOUT8h06EmWJECXisX%2BoEtLSI4hNNV3P3vR5DzNC1ehs%2BFxjTdtyTuLq8M%2FcMmnHgdmuzeJjDmtx3QkcjeEpDpaKdJJ4TSy55lUiynbEJR%2BKk0c1DCmXhMsS6jkSfQn6WRPurkAYIduz0ERZXnZfPDEwgXCBTdCWUDo0j8ga10oMFV01YKNOs5UrtNSqgGq3r9yzaLacs5zDhA6Ez3tkQfS9YqVXybpda4U7PVFYcuq1gV%2F1LNqa%2B3MAo9H9PJap7tROWcfIjI06ZGEXC%2F0NSJB9vftfBVKEtACSAeqkOXu5Vfb3%2FHGHyWa%2BCR7ARanQ0JQy5TnhhESnohrfyp46CWc%2BQbunnW9eXobfPPubAp1VQe2mNljJWaSNFbqZB3KihCoCngpYch50exjGVZ4YVaZstToyDeAZQ05I7oskW4n0eIoDAwEuNIOmCg2fWmxvyNrAMqOlogRXvxoYjg%2Bz0ugc1CjVC19zu6W5gJQnQXwMM4PZM381nv25X0q1QrSnTNSjmxL%2B8ykatLH99pSppnvxN2eKCd8RoKbxmfe7VPA0WJs1%2BtJNx0lVufOh9PXnGLXM5595xK80Sq89UxRowkcbxvgY6pgHl6HNrB1l5%2B6%2BphiK%2BTU6MS42NLQ5jqFBL6pqHoCqCcyEd4jvcg3hb0tU08B4Qw%2FYHsq1G4cxWpIw6SPMeOXwarq0qhp7NgUHiJAeLZFsBjJqCfade7oJ391Z%2Fw%2B2WrE9%2BaCEHSngbzKo%2FpJ8d4XPaxwpjOl%2BZ%2Blr96KuOQOPD6gAYyMrGqLHpxP29VSxvNcefpXRiK3eFqLC7ceNIpK6oVNnIaWuc&X-Amz-Signature=c2f0fc0d89f28a9f9c4651e126ae9f9b32ea5097bf49888ab721bec96acedcff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOXKXLE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIExW6sJQv7hYLVy03PieV1%2F29NjzGPVjj8xA%2F0lQ6gkjAiABdfJYVK%2BHcQyMhXxmWx1M1af7kai%2FTgRWf%2FnaOIcDFSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7OZIRqG7VT6Wl2hQKtwD3csTmPzJm0NoYrrtJY2mHY74i8G%2BYpzvI6OcO%2FebOUT8h06EmWJECXisX%2BoEtLSI4hNNV3P3vR5DzNC1ehs%2BFxjTdtyTuLq8M%2FcMmnHgdmuzeJjDmtx3QkcjeEpDpaKdJJ4TSy55lUiynbEJR%2BKk0c1DCmXhMsS6jkSfQn6WRPurkAYIduz0ERZXnZfPDEwgXCBTdCWUDo0j8ga10oMFV01YKNOs5UrtNSqgGq3r9yzaLacs5zDhA6Ez3tkQfS9YqVXybpda4U7PVFYcuq1gV%2F1LNqa%2B3MAo9H9PJap7tROWcfIjI06ZGEXC%2F0NSJB9vftfBVKEtACSAeqkOXu5Vfb3%2FHGHyWa%2BCR7ARanQ0JQy5TnhhESnohrfyp46CWc%2BQbunnW9eXobfPPubAp1VQe2mNljJWaSNFbqZB3KihCoCngpYch50exjGVZ4YVaZstToyDeAZQ05I7oskW4n0eIoDAwEuNIOmCg2fWmxvyNrAMqOlogRXvxoYjg%2Bz0ugc1CjVC19zu6W5gJQnQXwMM4PZM381nv25X0q1QrSnTNSjmxL%2B8ykatLH99pSppnvxN2eKCd8RoKbxmfe7VPA0WJs1%2BtJNx0lVufOh9PXnGLXM5595xK80Sq89UxRowkcbxvgY6pgHl6HNrB1l5%2B6%2BphiK%2BTU6MS42NLQ5jqFBL6pqHoCqCcyEd4jvcg3hb0tU08B4Qw%2FYHsq1G4cxWpIw6SPMeOXwarq0qhp7NgUHiJAeLZFsBjJqCfade7oJ391Z%2Fw%2B2WrE9%2BaCEHSngbzKo%2FpJ8d4XPaxwpjOl%2BZ%2Blr96KuOQOPD6gAYyMrGqLHpxP29VSxvNcefpXRiK3eFqLC7ceNIpK6oVNnIaWuc&X-Amz-Signature=1430917d7e2eb79f407bde3bb5039249d1ab84579c2fb9b923b3f3c814f637a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
