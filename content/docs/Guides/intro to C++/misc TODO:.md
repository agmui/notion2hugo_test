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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY4DL3J%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC9MiXpD4isizrteOnnWv6uzH5O4R%2BLj7lkS8IFzCVDrwIhAJ6zmj9L2Il0k1pmNyxEul2cP1RaMdJg%2BahBhelxMLiKKv8DCDEQABoMNjM3NDIzMTgzODA1Igxft2TCrymlma5sE3cq3APg%2F8D3Na0aNarEjJQrTRFEdqxPf%2FBqO4fXE9c9PEGpIoUbhHCiJSTATT4ft0cuSK86Cu7RhXKAjF7Wen3IOOVtgff2tfv0ahSDgepV%2B4FtNMP8YYL1L4ti6fBrasdmNH8SYPvPOtNvO%2BtWGyQ21nFAihOUEJ2NnlkZYviHvo5EMDWqHZ85gQbCNDC0YAoNpdUo0ZrgX2dObQjPILcBBek4BcKW5m6koOZRLb5gLhgZlDS%2BqEWJLo7VnyYMX2jEaHVTF8v5SgRKAl8LMf1s0nflsAmbQuc7vHXKQJe0HPLw9L3YNM%2F7rGmF%2FIG4aVQ1Tfd4p0s7MzXzbWg6B1uP3w3OCIQ2Mh1sKGUgmjv5CxkNXKZB%2B1Rw5KNvM9U74KljdFwC865HZM6%2FirQQ9NURhbkmdGApvfSy9E4A37y5woHJkcrC3yot%2BhbYwljNSURXwdLWe2Id0TJRffzWXkT%2BwX8n4aZypRx5FmyJkjlOP5TW779%2Fanp9QopiO4u1Kn8OmzfllpxvtWI2LrMmB9Qcdu1jFf4OEIvzOlUWWrsVDiJRnV9q0%2Fp01hptosmCFkMDU5d4dCpHSs67XNFZKywKOgbzAvQnr5G4DGyuDN1FcwnhkTpmMNyeU5Ra3GTpMDCz7J%2FDBjqkAYLsodj5HX9qd7xWD0IlBECfqTnij4tRbm8eGM%2FQ7PdLJp9F8syKkrX4ZIasLyMeFSlZSzknuio0eOwSDmEVoCXO8Q9MFzD1y0c8TqZHvsWDlg0w4HhV2MPfHpROaDucvDVsc9nP%2BfIm9NA1m5zrGXhPe7eP5U5vn%2FCHIluNnvt38KG5gQ1TPQw1XR418Z797XGF%2FcJCYuqCIqbojW88mDT2cYyI&X-Amz-Signature=54a7760ae751f5151fe6a21537fd3bcf2552ef830a22c54eb00f57207285f507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY4DL3J%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC9MiXpD4isizrteOnnWv6uzH5O4R%2BLj7lkS8IFzCVDrwIhAJ6zmj9L2Il0k1pmNyxEul2cP1RaMdJg%2BahBhelxMLiKKv8DCDEQABoMNjM3NDIzMTgzODA1Igxft2TCrymlma5sE3cq3APg%2F8D3Na0aNarEjJQrTRFEdqxPf%2FBqO4fXE9c9PEGpIoUbhHCiJSTATT4ft0cuSK86Cu7RhXKAjF7Wen3IOOVtgff2tfv0ahSDgepV%2B4FtNMP8YYL1L4ti6fBrasdmNH8SYPvPOtNvO%2BtWGyQ21nFAihOUEJ2NnlkZYviHvo5EMDWqHZ85gQbCNDC0YAoNpdUo0ZrgX2dObQjPILcBBek4BcKW5m6koOZRLb5gLhgZlDS%2BqEWJLo7VnyYMX2jEaHVTF8v5SgRKAl8LMf1s0nflsAmbQuc7vHXKQJe0HPLw9L3YNM%2F7rGmF%2FIG4aVQ1Tfd4p0s7MzXzbWg6B1uP3w3OCIQ2Mh1sKGUgmjv5CxkNXKZB%2B1Rw5KNvM9U74KljdFwC865HZM6%2FirQQ9NURhbkmdGApvfSy9E4A37y5woHJkcrC3yot%2BhbYwljNSURXwdLWe2Id0TJRffzWXkT%2BwX8n4aZypRx5FmyJkjlOP5TW779%2Fanp9QopiO4u1Kn8OmzfllpxvtWI2LrMmB9Qcdu1jFf4OEIvzOlUWWrsVDiJRnV9q0%2Fp01hptosmCFkMDU5d4dCpHSs67XNFZKywKOgbzAvQnr5G4DGyuDN1FcwnhkTpmMNyeU5Ra3GTpMDCz7J%2FDBjqkAYLsodj5HX9qd7xWD0IlBECfqTnij4tRbm8eGM%2FQ7PdLJp9F8syKkrX4ZIasLyMeFSlZSzknuio0eOwSDmEVoCXO8Q9MFzD1y0c8TqZHvsWDlg0w4HhV2MPfHpROaDucvDVsc9nP%2BfIm9NA1m5zrGXhPe7eP5U5vn%2FCHIluNnvt38KG5gQ1TPQw1XR418Z797XGF%2FcJCYuqCIqbojW88mDT2cYyI&X-Amz-Signature=d832ee5579d3de5dabe5b61eae32c64c419ec63557d7b7a9fbe232ab496cb5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
