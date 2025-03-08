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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B756K3N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEXcfXIqeD5sxTeam5biVoLAmu%2FA0aVnIygZZi09iShcAiEA0%2BzvZERCku%2BYPModTNDtw5fKG%2FDsupAMjLEhXZoOY20q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIgDk4dtK0pCCstEUircAxBAO%2BhZYC9LEx%2FuXW36VQ4i15z4j0sUMkWZmsW2fw7%2B0MbBMeryaBNg%2BbVLBMUIiqc5yUuxjm5IPjEkqidbuhrNQ14AsRJNZnxTfQekRpO7EBYiOTqsoq0fqU9AjNG3eZYmI4wN8PtwMxfiWgHUuJ58h4RCtKaWZcvXsKOz2bq%2BvQhra4%2FInN8bRoS7iuNxsitVEKI0ajZ9cwWicEEdJZfIOje2PwOD9QYbSZQSL47nzjobBM4dX3%2B3nD%2FSUu6%2BGtGN1qkI%2BbyZ3d%2F%2Fmf3V3pu7Ee5ttYryaVnDY0wot9OuGko06e7KvRjPPfxf4KcvSg5hFd0LMd%2FpsNakLS4D24cwaut6ILn6m7IXE8TFP5qEzBneOBU0GPwklUohUmjUqMcQ94nguI3ZUCH6i6zGyenZ6QdITCYOUFAG9kg8V9JjOqE0Z07u57GAO7lXodKfQbmVNNYOlYu7%2FzkXRGAveg7SNnQaChwxWHinmojMdf5tLvGGTm7sHBPTGkCDSibfl9aAflNbbuNzeMXq3G7nEoz7%2Fc%2BmM6iUl3I%2Fx3GmROH01XGwS2X%2F8bLh7CgfboDT%2Fa8pnAgYChKPhNbWq7bouvFM4Y6kxLjNr2DdEHUaCvy0xUVqbwsj2NmGZnB2MJ3fr74GOqUBEC1YTcJ%2Fx1fIqZFXXDrhzpou%2Brn%2B5542DkSHh7CFIYbbqxM%2FEV%2BpYzk6II7ZsW9raaMYu%2FWWXQfUXTSAAHI5RfK6j0QCkE1hTABafdCvkeQ5i3TwkPXo2QYV1J0HpG%2BK%2FMBc962f6F5qk9dUqT3imxgiVSAUSW0CgslxrFp%2BIeTw2aLBV0X6QePSYkHoZl%2BYr%2BgbWHyS6QyXTn1A%2Fy9XALrexDhb&X-Amz-Signature=86c952ea793907ccd3212e0bdfd74bc183b283c5ed40d891aa5c5551c0e79f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B756K3N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEXcfXIqeD5sxTeam5biVoLAmu%2FA0aVnIygZZi09iShcAiEA0%2BzvZERCku%2BYPModTNDtw5fKG%2FDsupAMjLEhXZoOY20q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIgDk4dtK0pCCstEUircAxBAO%2BhZYC9LEx%2FuXW36VQ4i15z4j0sUMkWZmsW2fw7%2B0MbBMeryaBNg%2BbVLBMUIiqc5yUuxjm5IPjEkqidbuhrNQ14AsRJNZnxTfQekRpO7EBYiOTqsoq0fqU9AjNG3eZYmI4wN8PtwMxfiWgHUuJ58h4RCtKaWZcvXsKOz2bq%2BvQhra4%2FInN8bRoS7iuNxsitVEKI0ajZ9cwWicEEdJZfIOje2PwOD9QYbSZQSL47nzjobBM4dX3%2B3nD%2FSUu6%2BGtGN1qkI%2BbyZ3d%2F%2Fmf3V3pu7Ee5ttYryaVnDY0wot9OuGko06e7KvRjPPfxf4KcvSg5hFd0LMd%2FpsNakLS4D24cwaut6ILn6m7IXE8TFP5qEzBneOBU0GPwklUohUmjUqMcQ94nguI3ZUCH6i6zGyenZ6QdITCYOUFAG9kg8V9JjOqE0Z07u57GAO7lXodKfQbmVNNYOlYu7%2FzkXRGAveg7SNnQaChwxWHinmojMdf5tLvGGTm7sHBPTGkCDSibfl9aAflNbbuNzeMXq3G7nEoz7%2Fc%2BmM6iUl3I%2Fx3GmROH01XGwS2X%2F8bLh7CgfboDT%2Fa8pnAgYChKPhNbWq7bouvFM4Y6kxLjNr2DdEHUaCvy0xUVqbwsj2NmGZnB2MJ3fr74GOqUBEC1YTcJ%2Fx1fIqZFXXDrhzpou%2Brn%2B5542DkSHh7CFIYbbqxM%2FEV%2BpYzk6II7ZsW9raaMYu%2FWWXQfUXTSAAHI5RfK6j0QCkE1hTABafdCvkeQ5i3TwkPXo2QYV1J0HpG%2BK%2FMBc962f6F5qk9dUqT3imxgiVSAUSW0CgslxrFp%2BIeTw2aLBV0X6QePSYkHoZl%2BYr%2BgbWHyS6QyXTn1A%2Fy9XALrexDhb&X-Amz-Signature=887a6c40833adeb833367027c4082b7f4a112107e576890d0dfac6c76860e6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
