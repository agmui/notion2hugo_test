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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3D6OE6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9WR8YusYwNQhfl9F5iKdDIgAPPPKBqJbNWFQg5EXw0gIgCB6lAl89cXmMOTmuza4jTcr5jxwbJ5BKbf2iL44k70sq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCd%2BDCYSM08BOcRScCrcAxYrlLUTYfTiz%2Fol%2B17AWOLvy5YA2wa0eP7aaR3G197JnegRzv8xqXcqef8Y9k18yaCo40U2HtD3aZ%2BA6FudKK7Q%2FQi2OyYC7EvI%2B7poXA%2FcRWNQ5YpBxP9khq2zdIyH9%2B3huMRTne2IanEnZcg2%2BS3jBUWmIqHFtUXUXEwwa%2BEfMXwVbv4Tl5KWdmqP8kT6RErK%2FhlHZ9T5ejW%2F62xgUEp0zDLJ3HDUdjMiwjV6sewUh76jFlMZh1Mnw2qrCwqpl8DqyU5v5%2BH3G8%2B8GMdjF%2Fz7GBD3wDzTWndvYrRzjCBuSUcPWNCg7Z5yo4N05rBnVSB1p1qFz5yRTC1evUnL5e389TCujmpLrPvDR1Ms8P0xZs%2FJjellgX9wCtQ4%2FzzKUVSwo9B5duVp7kwIKU0Wat1FXk4PEOkm5JeLTx4XQ69Ygds9%2BDKbLxtV3T%2Fc%2F2dUMnI2TmRMsPxUCnLea5BP1OEtEt9GohTkoJ2AuNG3jQEC25a3dloEESU5aD%2FlczIouUC0ysYsHah8E%2BnvikszIMynbL6x1JF5%2BjWKDMgv8Dn85RVUDRUHbELg6aTvs%2B%2Br9v9Iv%2FPsArbD1isScfEK%2B1vkA7VJycN5NVHlcgDtBj84KsxNDJoSdb6V9V6ZMM6euL0GOqUBkQFGRTxRA%2BTBrcvQrQgNdPusGftqboHXk0%2FKEKbmCdP1ZorLjuzumSVikcXk9Njuo1rxW4Bvc%2FRNnf%2BnCrzGQqirH%2BYFBpM7XXg6efcu7U1uJa94v6D%2Fz4m0JNt8nhhWbHAA8mD6TRX2UQtcpYCoQXKH7%2FOpmRPoFMR%2BXMTF8qLYoRrdqdJDRbtzpsQV9PwKMIWj7B7fsxpH%2Fhn8G04Q6amQEMGR&X-Amz-Signature=dbf2894de6386ea2b0b8d06aa75c2fa29e7ebbe30abe2bfe74fe10fff212119f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3D6OE6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9WR8YusYwNQhfl9F5iKdDIgAPPPKBqJbNWFQg5EXw0gIgCB6lAl89cXmMOTmuza4jTcr5jxwbJ5BKbf2iL44k70sq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCd%2BDCYSM08BOcRScCrcAxYrlLUTYfTiz%2Fol%2B17AWOLvy5YA2wa0eP7aaR3G197JnegRzv8xqXcqef8Y9k18yaCo40U2HtD3aZ%2BA6FudKK7Q%2FQi2OyYC7EvI%2B7poXA%2FcRWNQ5YpBxP9khq2zdIyH9%2B3huMRTne2IanEnZcg2%2BS3jBUWmIqHFtUXUXEwwa%2BEfMXwVbv4Tl5KWdmqP8kT6RErK%2FhlHZ9T5ejW%2F62xgUEp0zDLJ3HDUdjMiwjV6sewUh76jFlMZh1Mnw2qrCwqpl8DqyU5v5%2BH3G8%2B8GMdjF%2Fz7GBD3wDzTWndvYrRzjCBuSUcPWNCg7Z5yo4N05rBnVSB1p1qFz5yRTC1evUnL5e389TCujmpLrPvDR1Ms8P0xZs%2FJjellgX9wCtQ4%2FzzKUVSwo9B5duVp7kwIKU0Wat1FXk4PEOkm5JeLTx4XQ69Ygds9%2BDKbLxtV3T%2Fc%2F2dUMnI2TmRMsPxUCnLea5BP1OEtEt9GohTkoJ2AuNG3jQEC25a3dloEESU5aD%2FlczIouUC0ysYsHah8E%2BnvikszIMynbL6x1JF5%2BjWKDMgv8Dn85RVUDRUHbELg6aTvs%2B%2Br9v9Iv%2FPsArbD1isScfEK%2B1vkA7VJycN5NVHlcgDtBj84KsxNDJoSdb6V9V6ZMM6euL0GOqUBkQFGRTxRA%2BTBrcvQrQgNdPusGftqboHXk0%2FKEKbmCdP1ZorLjuzumSVikcXk9Njuo1rxW4Bvc%2FRNnf%2BnCrzGQqirH%2BYFBpM7XXg6efcu7U1uJa94v6D%2Fz4m0JNt8nhhWbHAA8mD6TRX2UQtcpYCoQXKH7%2FOpmRPoFMR%2BXMTF8qLYoRrdqdJDRbtzpsQV9PwKMIWj7B7fsxpH%2Fhn8G04Q6amQEMGR&X-Amz-Signature=2f101c137cfe0f2a466d31b92f9cffe653e3c9370ab7b820858de00e7386029d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
