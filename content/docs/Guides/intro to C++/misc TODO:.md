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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SF4HSSU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC19bybM9%2BW%2Fng6WjuPgPfAUOBJibhYnfWJm9e9jW1SAAiEA3QbQC5s5yo7ifKvgDh10UF9orSQZta98n6loPXR4wjwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUhrtOzSIKpdC9nJyrcA2pc8otFrpdxoiGle0VT0be3mrKRQwyeSDOR55hbRoA14iLowL87eIUsQnRF4w0Kz%2BqCzcnteDOwPcAJcDq9qR6yRnZoADcvv1OzJoTHRRGAKPJ5kSF%2BoO26Mje4gPzVR9gQ9SHNZYa7xQeQzumumZ4pc12ToPUEoaGIPWvOdaNEYg%2F6P3jyTFL5F7e7i8U92Sq7FshpeetLJgQbw2bLu7IDFux76L12JBYL%2BdOkLjeOKPP%2FhlfYTeynzfWJzTFKgbD40jILif%2F7NDjjO78JpteDRDq%2Buj3SP%2BzqIQs2Qg4giduFKtbuHBqwYigTAltG6i44K%2BNbUcNOnamt5ZmsT2XthvYrDxVMdkH0y4XSP%2F4J2iaWr7yWJmej2%2F%2FDJxlc4BNzgskaWG3vdgVAHaWEL4Gz9MUHSpCtUYUAZuatqIn76TqxXGM7Re7U2acFlwHNg9PsEPCkuw2XN%2FeAXdjWdaTEizGmoCLb2vPM2C8xR7u55g5LVhBIeiQyJgSns7J%2BMWj%2B%2FO6zppayr5BtW9vlqUiIV1JWHFmmHZdK%2BLx4gJ5o6kB6BgZ29dxQGu%2BSPboGS9HQdC8rB9dQYLC38xDwwuJ%2FON%2FcybOtNJqk01UKr9T%2FcEAsBiTaB4ryuaY6MKXJpMIGOqUBL%2FhyNbuHp8LyfcxQt74IAPiQTNcNU7%2F2EHDSESL87HsyGPzLQ9yXY1D9hxSaSCRtpv8FyFRuhGtSxCA3XZpOO8BWyIhW7cePrKX6kxLFiin7aR%2BDtV%2F6rPn%2FuRc6DGu%2BcC9x%2BvhkCmORgDaFN5QSGMs2aMoyLKO%2Bez3fnR45qJTIL6p%2FgiCBCfwB%2B6XeiH8bnYqUGw5Tj5cMl%2BG4lWfbI%2BavmMOs&X-Amz-Signature=aecc38a6f4053156443c24feeab50d6433d80ef69a2dd35e354aebafd4a58e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SF4HSSU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC19bybM9%2BW%2Fng6WjuPgPfAUOBJibhYnfWJm9e9jW1SAAiEA3QbQC5s5yo7ifKvgDh10UF9orSQZta98n6loPXR4wjwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUhrtOzSIKpdC9nJyrcA2pc8otFrpdxoiGle0VT0be3mrKRQwyeSDOR55hbRoA14iLowL87eIUsQnRF4w0Kz%2BqCzcnteDOwPcAJcDq9qR6yRnZoADcvv1OzJoTHRRGAKPJ5kSF%2BoO26Mje4gPzVR9gQ9SHNZYa7xQeQzumumZ4pc12ToPUEoaGIPWvOdaNEYg%2F6P3jyTFL5F7e7i8U92Sq7FshpeetLJgQbw2bLu7IDFux76L12JBYL%2BdOkLjeOKPP%2FhlfYTeynzfWJzTFKgbD40jILif%2F7NDjjO78JpteDRDq%2Buj3SP%2BzqIQs2Qg4giduFKtbuHBqwYigTAltG6i44K%2BNbUcNOnamt5ZmsT2XthvYrDxVMdkH0y4XSP%2F4J2iaWr7yWJmej2%2F%2FDJxlc4BNzgskaWG3vdgVAHaWEL4Gz9MUHSpCtUYUAZuatqIn76TqxXGM7Re7U2acFlwHNg9PsEPCkuw2XN%2FeAXdjWdaTEizGmoCLb2vPM2C8xR7u55g5LVhBIeiQyJgSns7J%2BMWj%2B%2FO6zppayr5BtW9vlqUiIV1JWHFmmHZdK%2BLx4gJ5o6kB6BgZ29dxQGu%2BSPboGS9HQdC8rB9dQYLC38xDwwuJ%2FON%2FcybOtNJqk01UKr9T%2FcEAsBiTaB4ryuaY6MKXJpMIGOqUBL%2FhyNbuHp8LyfcxQt74IAPiQTNcNU7%2F2EHDSESL87HsyGPzLQ9yXY1D9hxSaSCRtpv8FyFRuhGtSxCA3XZpOO8BWyIhW7cePrKX6kxLFiin7aR%2BDtV%2F6rPn%2FuRc6DGu%2BcC9x%2BvhkCmORgDaFN5QSGMs2aMoyLKO%2Bez3fnR45qJTIL6p%2FgiCBCfwB%2B6XeiH8bnYqUGw5Tj5cMl%2BG4lWfbI%2BavmMOs&X-Amz-Signature=bc93e35a1dbc7bf32c6d8a3bafe0f4ea50d9760beb537ad0e9c922eeaf372420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
