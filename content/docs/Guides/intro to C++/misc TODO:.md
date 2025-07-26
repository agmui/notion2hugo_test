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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54CDSJ7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCfLS7RkF99Rv1%2FLabuxIypLpSAPkTPl1MYyudTXMC3qQIhAJ4PYu%2BpKl0%2Fnw4p4Fn0oEFna0itkC4MUgKzKY%2B3DdLMKv8DCF0QABoMNjM3NDIzMTgzODA1IgyrEQNFiGNyzhq5gLQq3AONfIvyjDUMCxDc2b1Yv%2BmoWxuPhSxPW4mLOXhHrJC3cyOwga7TpttN%2BZkhWQScE4PD%2FPGS3On%2FaM0Pf8VstamDYJa%2B2liHtGBo5RvbXJbunZykHRH54Dhr8UCSWSDc0VezsrNtn7LE3%2BJQ8snMzq2%2F6OEKtyAAQHNJvZ%2BIlApG%2BjxYAuO97xIIXY2uRjyxfniPw2X9sGxR923xATP4MBpGltJtKukLPlhkl3XzSox4YI9gOirGhyeGLRJtWHLNyQvoCG6YOjm2wbu0sPR8BsgxsrWNs5LQnvF8h%2BnMrfg%2BNQ%2FIxj3vrBwIlZYmYSHSQX%2BZujq8J1ltuIMRXr%2FMoa3nCLYNAWP5crXXkPvPckz50eRaUzQ6KsSwRctEndNZ1fZcYD7xhYxgCg%2Bl2HJ3kTQdtQ5KhmszQo3jELRKIb04%2B44v%2FHgf2ALp3S3GVcf6mESNk%2BPY3cS2mJbxr%2FKHR3Po1MB7QHzbSXUhk64NHgZz5RgZBv22cQWWssrDrVIlFr7o1FbSUKIpCNMqipndNru7LTlJXYfeW4AVVCRyZd5he5rjUOtwZ5zNNAsiAwWuGLjRiX9VUrrwq7awgP%2B97WRXVO5YRx9KHPo5ivQr7E1EksVMio34nqNGpnwKCzCu%2BpLEBjqkAeCQeZM%2F%2FmLzZnN%2FYTjhnkR2%2BkF2sKJt8n2zwzEZchq5qJqnK6FuI436rsd8oDZ7YgyuzKkNteYWeCGhYIdY2Wpy6rM77df44I8YYtm4g%2BdnMu85TKRKQUmUZva4leXQqjkvRPc9uEZcSIVBZpx1Vd3ITA01C7TQmHfzzjVojaKD0DdY%2Bdnoci4W5r9j2ItIUSgJv6TOGYAJEC1CZAmnPYIaZdmP&X-Amz-Signature=bacd50ae70144d014798b20951682a2e93d704ba3222e28445bc4b7ea2ad4a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54CDSJ7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCfLS7RkF99Rv1%2FLabuxIypLpSAPkTPl1MYyudTXMC3qQIhAJ4PYu%2BpKl0%2Fnw4p4Fn0oEFna0itkC4MUgKzKY%2B3DdLMKv8DCF0QABoMNjM3NDIzMTgzODA1IgyrEQNFiGNyzhq5gLQq3AONfIvyjDUMCxDc2b1Yv%2BmoWxuPhSxPW4mLOXhHrJC3cyOwga7TpttN%2BZkhWQScE4PD%2FPGS3On%2FaM0Pf8VstamDYJa%2B2liHtGBo5RvbXJbunZykHRH54Dhr8UCSWSDc0VezsrNtn7LE3%2BJQ8snMzq2%2F6OEKtyAAQHNJvZ%2BIlApG%2BjxYAuO97xIIXY2uRjyxfniPw2X9sGxR923xATP4MBpGltJtKukLPlhkl3XzSox4YI9gOirGhyeGLRJtWHLNyQvoCG6YOjm2wbu0sPR8BsgxsrWNs5LQnvF8h%2BnMrfg%2BNQ%2FIxj3vrBwIlZYmYSHSQX%2BZujq8J1ltuIMRXr%2FMoa3nCLYNAWP5crXXkPvPckz50eRaUzQ6KsSwRctEndNZ1fZcYD7xhYxgCg%2Bl2HJ3kTQdtQ5KhmszQo3jELRKIb04%2B44v%2FHgf2ALp3S3GVcf6mESNk%2BPY3cS2mJbxr%2FKHR3Po1MB7QHzbSXUhk64NHgZz5RgZBv22cQWWssrDrVIlFr7o1FbSUKIpCNMqipndNru7LTlJXYfeW4AVVCRyZd5he5rjUOtwZ5zNNAsiAwWuGLjRiX9VUrrwq7awgP%2B97WRXVO5YRx9KHPo5ivQr7E1EksVMio34nqNGpnwKCzCu%2BpLEBjqkAeCQeZM%2F%2FmLzZnN%2FYTjhnkR2%2BkF2sKJt8n2zwzEZchq5qJqnK6FuI436rsd8oDZ7YgyuzKkNteYWeCGhYIdY2Wpy6rM77df44I8YYtm4g%2BdnMu85TKRKQUmUZva4leXQqjkvRPc9uEZcSIVBZpx1Vd3ITA01C7TQmHfzzjVojaKD0DdY%2Bdnoci4W5r9j2ItIUSgJv6TOGYAJEC1CZAmnPYIaZdmP&X-Amz-Signature=b2538f505d223a105ba539df4b1357d0620e65137ab222d3dba02de2e32591ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
