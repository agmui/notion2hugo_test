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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIWPTLY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDubvui36wPfct2C1Tirh5IDBj1OO88tghoHrU8VrBlkAIhAP2oPzkYnRZbsv6XtxXUfQ4OkaslPbQCgiYITamw20klKv8DCEcQABoMNjM3NDIzMTgzODA1IgwZHuMhJtlP3rGS5vIq3AO7oe9OF%2FrgwooMMAmp0ICqj6Orvif9ThkR%2F9ncne%2Bv0n1oQx%2BpC2GJ3nqLBhSb9dHP%2FIZ%2FSyYNVR21Yy78bUaTeRMRxS2dzTLBJswgh6VbYungdDyubVF%2FwZHtzmi4zHe0Eut1YjIB2ua9kCbz8WKjid74O4x2sRBlwsRymEZXGFd2HniEm%2BlqrwYjn8XQd9NBAjoC%2B6UnzK0HzMtuHL5iJXBQ%2FVzBu6xpjK4CylkJi1d4NL8sN38jb5K59YPAuDhGrHv9Xm2yEoFO6%2BbNcOEFikThFIbG1Ms2mRQWPkIeA70RD7gp96ooKwCWX%2BRztMF3a3mtq5mmhDbgosX4d606im33HS6obz0vnC2KclT0%2BtaEntUqDusRxT2lZtKuK0lWDnfbUccBf3F3%2BUpq9nu7NSJO8VV4L4Ks5XRSF94lJ8Hak0l6nRvJG2SEgGESH8M5Nsak0RdQ7wX84krsNE7%2Bk3AzRTHzf7HV%2BvXaLjX4iyQtXW1cjIZtUKM1sWHctsqNi%2Ff%2F8HURO3Yx1w7liFaIGtfiPrd5TZ7YJRKI8V%2BntvngBaaVcaZ3bzsdAScao7NedBUF2a7sZh0ePQ86tF9tjnn%2BvD93e2If1oQVQg2y2CGbrnafVy%2Buq6SOVDDopLvCBjqkAacyXAYwrKEbUTCwFM%2BDvRN22%2F7hKtHDk%2F6jA1X7sImJnmzpHedTHzAg69ix8VGEQq%2BLhyaMTG%2BiyfgZflh1V5rl7SNZQpnmuJP0acnj%2FmtortkxkaKVoDyV54mpM3wVHcPjAqgUzFy4G72paCaXlhCUBWIaNgFLoOxCNylEcoD87JvsOAf7%2B4iVR2HCzJAAOUgviqkS%2BIyor5zRKn4iD2BJSDlC&X-Amz-Signature=6912f10c690fd09e8530baf8884c064b39020848899660b92f5d6ef86b94def1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIWPTLY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDubvui36wPfct2C1Tirh5IDBj1OO88tghoHrU8VrBlkAIhAP2oPzkYnRZbsv6XtxXUfQ4OkaslPbQCgiYITamw20klKv8DCEcQABoMNjM3NDIzMTgzODA1IgwZHuMhJtlP3rGS5vIq3AO7oe9OF%2FrgwooMMAmp0ICqj6Orvif9ThkR%2F9ncne%2Bv0n1oQx%2BpC2GJ3nqLBhSb9dHP%2FIZ%2FSyYNVR21Yy78bUaTeRMRxS2dzTLBJswgh6VbYungdDyubVF%2FwZHtzmi4zHe0Eut1YjIB2ua9kCbz8WKjid74O4x2sRBlwsRymEZXGFd2HniEm%2BlqrwYjn8XQd9NBAjoC%2B6UnzK0HzMtuHL5iJXBQ%2FVzBu6xpjK4CylkJi1d4NL8sN38jb5K59YPAuDhGrHv9Xm2yEoFO6%2BbNcOEFikThFIbG1Ms2mRQWPkIeA70RD7gp96ooKwCWX%2BRztMF3a3mtq5mmhDbgosX4d606im33HS6obz0vnC2KclT0%2BtaEntUqDusRxT2lZtKuK0lWDnfbUccBf3F3%2BUpq9nu7NSJO8VV4L4Ks5XRSF94lJ8Hak0l6nRvJG2SEgGESH8M5Nsak0RdQ7wX84krsNE7%2Bk3AzRTHzf7HV%2BvXaLjX4iyQtXW1cjIZtUKM1sWHctsqNi%2Ff%2F8HURO3Yx1w7liFaIGtfiPrd5TZ7YJRKI8V%2BntvngBaaVcaZ3bzsdAScao7NedBUF2a7sZh0ePQ86tF9tjnn%2BvD93e2If1oQVQg2y2CGbrnafVy%2Buq6SOVDDopLvCBjqkAacyXAYwrKEbUTCwFM%2BDvRN22%2F7hKtHDk%2F6jA1X7sImJnmzpHedTHzAg69ix8VGEQq%2BLhyaMTG%2BiyfgZflh1V5rl7SNZQpnmuJP0acnj%2FmtortkxkaKVoDyV54mpM3wVHcPjAqgUzFy4G72paCaXlhCUBWIaNgFLoOxCNylEcoD87JvsOAf7%2B4iVR2HCzJAAOUgviqkS%2BIyor5zRKn4iD2BJSDlC&X-Amz-Signature=b82ceb5483a55be7047a5772dcdde3862171c759a209b6d3e2f7059e84edffff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
