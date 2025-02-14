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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPTOIW5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCsveu009P%2F9939ioeIbuOq6%2BcaJ4agyTjNFkRqJ7KsdAIhALtHHhs1po8lBj0MWTGtv6ZnkrHRr45gWAyvXSawR6i4Kv8DCC0QABoMNjM3NDIzMTgzODA1Igwf03jLWILlrjUlXt0q3ANgAWdZBtJ4KgHkKXAFiI2fDJDPBP37E0vgvTvFiIX%2BFcZmBBYrt6OBLfB%2B%2B6wxNT%2BM%2FtpDiTzKkdOpvOI3x9ea8%2Ffmkwql0hBlFpsK0tbYw9Yp6X1cRb2VQJ%2BXDqfNITVwYQFtDGk%2Fhih2aDb8U8fo29Zca9HMClSYN%2Fqw9K2b7mRMGorTQO9eyX1liwIf7ZVSFySad8IudgH3NUdffMMbuj0%2BbW3LLGO36LBD%2FLsqoTv0TtAIE6xAJDi6Iql5ohGdmlTcTnDNivX1xTXGMqQMrol9IlZ7ZYbCyVXBzm%2F9%2BCeA2odxG3%2BXjZ4medaryxz0J47PqZbRO1hQ6Ts0CWTtoRHnHXrmDj9Ao7xL5ugxXMbvTusXlf4Yw7OxhWSTuT7%2FfF1UWqhJuTjngE1F4q5evnjtSFOljkCfI9Y6NNH22X23znNu8U5IPfyhxQZ4sxp33gljgA873dqobHD1dWzb%2F4KBhE%2BBQq9gkN1kO5R9eUR%2F%2FJOGnUrI0AT047XxMNDsRTmi8XkmJt0Njerp9dnvUEK%2F8bXf6FOzR3MgfTLzD84LgEDSRlRGclGjOFeCCWrVL3ZPtR3RVgE%2F%2FQwyQT6%2BUcLg1CrHM6AC2PzDUqVol%2BBzlAlRJLsd6WIWaDCN6ry9BjqkAciYun%2BZQWomtDTC5LVNM2U0sfj3uuCheIG0Ti7AX6WjKRoaezGxD8hA2chc8PF17ePTSXujbgCdtq%2B76dzdqH%2FBK8VIe2wCbBZylzLD7Qxco97mrVElIKfIUzl8WKRzpsVJLPQTVqVAIEmZi9wkiXiHPIJ4PYNH%2BZHpNeecv8uTXhTu6AaDDtsYhCuiqu%2BbuitSE0gHXbHkh57QujU3Mf5OiSrr&X-Amz-Signature=c230c09da642827c4996b6c357c42a2fe188a5804513615f514a19b16b65ba4e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPTOIW5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCsveu009P%2F9939ioeIbuOq6%2BcaJ4agyTjNFkRqJ7KsdAIhALtHHhs1po8lBj0MWTGtv6ZnkrHRr45gWAyvXSawR6i4Kv8DCC0QABoMNjM3NDIzMTgzODA1Igwf03jLWILlrjUlXt0q3ANgAWdZBtJ4KgHkKXAFiI2fDJDPBP37E0vgvTvFiIX%2BFcZmBBYrt6OBLfB%2B%2B6wxNT%2BM%2FtpDiTzKkdOpvOI3x9ea8%2Ffmkwql0hBlFpsK0tbYw9Yp6X1cRb2VQJ%2BXDqfNITVwYQFtDGk%2Fhih2aDb8U8fo29Zca9HMClSYN%2Fqw9K2b7mRMGorTQO9eyX1liwIf7ZVSFySad8IudgH3NUdffMMbuj0%2BbW3LLGO36LBD%2FLsqoTv0TtAIE6xAJDi6Iql5ohGdmlTcTnDNivX1xTXGMqQMrol9IlZ7ZYbCyVXBzm%2F9%2BCeA2odxG3%2BXjZ4medaryxz0J47PqZbRO1hQ6Ts0CWTtoRHnHXrmDj9Ao7xL5ugxXMbvTusXlf4Yw7OxhWSTuT7%2FfF1UWqhJuTjngE1F4q5evnjtSFOljkCfI9Y6NNH22X23znNu8U5IPfyhxQZ4sxp33gljgA873dqobHD1dWzb%2F4KBhE%2BBQq9gkN1kO5R9eUR%2F%2FJOGnUrI0AT047XxMNDsRTmi8XkmJt0Njerp9dnvUEK%2F8bXf6FOzR3MgfTLzD84LgEDSRlRGclGjOFeCCWrVL3ZPtR3RVgE%2F%2FQwyQT6%2BUcLg1CrHM6AC2PzDUqVol%2BBzlAlRJLsd6WIWaDCN6ry9BjqkAciYun%2BZQWomtDTC5LVNM2U0sfj3uuCheIG0Ti7AX6WjKRoaezGxD8hA2chc8PF17ePTSXujbgCdtq%2B76dzdqH%2FBK8VIe2wCbBZylzLD7Qxco97mrVElIKfIUzl8WKRzpsVJLPQTVqVAIEmZi9wkiXiHPIJ4PYNH%2BZHpNeecv8uTXhTu6AaDDtsYhCuiqu%2BbuitSE0gHXbHkh57QujU3Mf5OiSrr&X-Amz-Signature=b9de88c039a30e16f8febd052e626cccf99381623fa5582c81c0c796896a80cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
