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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3UAA3J%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBrBEi6DmodMEg0q7O%2BoxDBvZSgGpFzR67zNVMwglntMAiAKlAiYn%2FrTsCOPuSgtSpnXLVuDEiBknOsVUxdqjReMmCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMcaS0lP6WGAT5d8Z3KtwDO%2F8CbFabWWVxYjptEYqVI4Dl%2FslBqjdJxDi6t2zmsjmyKO5ZFNf98BaK6%2BEziPNDKl2cGWDPHSPXJcOloyEyG6TVRz3v73OPgZATCsMTINhqmXujNkDXi9PssviskUMCfgUYfmq7xcTZfmv%2Fh%2FHns2N7WG7h4p6jxuz6Pt2AASm7o0sQgE4i50rpaUQfnxhDdw3hzbGWZgD3hbhJLThtqJFJjWGZ3SInU0gsosGjpQR1C5OBvUosx4vmPxdExUeEW7HkVTHuH1zuUb%2FVEjwShFv7MUXqneDKpn%2B%2FfMyqD%2FKSrGBsSOEZ6VaUdfjAaPuuELHHQnaRgzonU4177zl5iXY%2BTDO6yP5rapVwp72hbGzpaYi7NvN%2FXdodO1Vrc%2FRIXjiEDrBlvLBuSSp%2Bw9yWEnd7NRa7L1HVqE5D7LZAN28rAbQ1QMF8SVAUcQPcSaOb9RwbNniqkzKs9Peo5TP3WWifJ32AK5lrOvC62tyvfu8wlRZBwz5ESNf9SeKLlthl6TcidVJ0vp3GtjpCCXQEtwjLFIhsUauUfJGPCiDA%2BgA9%2FObK%2FVit6aNlESXCXsM300TP4bbfIUo%2FrXJ2fSMtZeg%2Bq2GhxRy2BJ57DBzceS%2BsU88t0jT9PXwNmt4w4v3WwwY6pgGd%2FvYU%2Bsg5a1P5%2BGz7IqkQDScuNlr%2BPryz58kBYdEny0gue4Xa6YEOAYaCI2qgly4p%2Bjmp76jcxuHGa3Lp65pmXTNw3im6xk5f5w0ArfdlVmbuYQkmTUXVILsLNH3f6PZsNiKedJ%2FYRdhZJWISDfa9nYbe9faPiyGrajEpa%2Brs4vfAK%2FKTkI0PnPM6jnDWp3pTmsmG4g7%2BNfW7loLbkGXSgj3AX1s3&X-Amz-Signature=acfd450dfdf3d8f2c4bffd68b10a763a6b49e3ca44e3c381017ce7bea48b7e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3UAA3J%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBrBEi6DmodMEg0q7O%2BoxDBvZSgGpFzR67zNVMwglntMAiAKlAiYn%2FrTsCOPuSgtSpnXLVuDEiBknOsVUxdqjReMmCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMcaS0lP6WGAT5d8Z3KtwDO%2F8CbFabWWVxYjptEYqVI4Dl%2FslBqjdJxDi6t2zmsjmyKO5ZFNf98BaK6%2BEziPNDKl2cGWDPHSPXJcOloyEyG6TVRz3v73OPgZATCsMTINhqmXujNkDXi9PssviskUMCfgUYfmq7xcTZfmv%2Fh%2FHns2N7WG7h4p6jxuz6Pt2AASm7o0sQgE4i50rpaUQfnxhDdw3hzbGWZgD3hbhJLThtqJFJjWGZ3SInU0gsosGjpQR1C5OBvUosx4vmPxdExUeEW7HkVTHuH1zuUb%2FVEjwShFv7MUXqneDKpn%2B%2FfMyqD%2FKSrGBsSOEZ6VaUdfjAaPuuELHHQnaRgzonU4177zl5iXY%2BTDO6yP5rapVwp72hbGzpaYi7NvN%2FXdodO1Vrc%2FRIXjiEDrBlvLBuSSp%2Bw9yWEnd7NRa7L1HVqE5D7LZAN28rAbQ1QMF8SVAUcQPcSaOb9RwbNniqkzKs9Peo5TP3WWifJ32AK5lrOvC62tyvfu8wlRZBwz5ESNf9SeKLlthl6TcidVJ0vp3GtjpCCXQEtwjLFIhsUauUfJGPCiDA%2BgA9%2FObK%2FVit6aNlESXCXsM300TP4bbfIUo%2FrXJ2fSMtZeg%2Bq2GhxRy2BJ57DBzceS%2BsU88t0jT9PXwNmt4w4v3WwwY6pgGd%2FvYU%2Bsg5a1P5%2BGz7IqkQDScuNlr%2BPryz58kBYdEny0gue4Xa6YEOAYaCI2qgly4p%2Bjmp76jcxuHGa3Lp65pmXTNw3im6xk5f5w0ArfdlVmbuYQkmTUXVILsLNH3f6PZsNiKedJ%2FYRdhZJWISDfa9nYbe9faPiyGrajEpa%2Brs4vfAK%2FKTkI0PnPM6jnDWp3pTmsmG4g7%2BNfW7loLbkGXSgj3AX1s3&X-Amz-Signature=a19dba6438d173210e991d1fd224dd591a3eb1cd42ed45cb6d544cbc7de6ffa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
