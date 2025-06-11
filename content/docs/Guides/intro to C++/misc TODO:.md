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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2OCIV3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B%2F%2BgKKryvhM605xCZgOOO4eE%2BdnxNCYSZhEDf3FmKPwIgItbV4DeXgSmBhgODV4jTQUFpGNbhX9ZVKZTYcqV7Vz8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNqd1flWT%2Bm2vSNyrcA%2FjaKoJ%2FPZ0YcaDtWfMcqhV0YF7Nr%2FF92%2F8ZhrX0GJk80Yo18Bv9SlYKudDSZ049OP4oji7yPTcfWKdlNzy9u7rOFLYtWIbPg7UvVLMA0gSfUQ8njsFVIVsQyMC9r%2Fr8QROHNrnretPy74s9OjjSCR%2FXycMtn7RPFUapKNhf6hcKWG0ij2pDOwsNw50jwYxbAm0%2F3gTxhQQPMNIV5y2gWP0L2kb78mlf1rOGOnrVJhs3Pps81%2FHQVD9xolmq11oq5Mu6itHdnCy0TXia9IFlnn4DAfdmJmLrEKZW60Q56ZYSO%2BBSSqOY1Ys7FpxbGaYKypeYcdS4VmKTbo94j6dzbnHZP6ZauKzBZJt2UN2RdwqZ3TqLkDsO0%2FfLNI646q6CmDdezJNxdQ2L8CgLt6Ph7dPTgpc%2BDvME5RVq1n2c24t0LszN1CPUZVkPKLJ2ANNylvzjZ72LeoZcENok2XS0sAV8%2FXPSpHH%2FQOmC2n7Yr2jsiTosJWHT2HLevMBorQaYienAYMdifUEqRlBvFfoqeJPw9zg06IQvc%2BbRDnfUCHw4p5g6U7LBK15eLsYsMdbKPTuuzNenc18hxbrgYkRWD8GPPXkVEf3Ri8ZJ3WWmXFPgmvOk39%2Bw99V7kZgeMK24pcIGOqUBmclud3rS6CEUnTLKskPD9iStqSeyQGpPH%2BpvFcBN%2Fkha8RVNdzmyqFYtVQy688dV7KM7YVaQJ0%2FvOhNDQkbZtjjyv7CzqpY7gW3hj86nUEAB8jH6WAdW0lbDQ6etgmXq77h%2BdAYKcBjO6RhWQVs0b0F6nQd4Mg8bqwGQ8LxzM0BGYuUs5vK1sw22sHcFe1E7ROKSLEnziVytArIaoJNwP6H3Hf8B&X-Amz-Signature=4fbb62fcbe8703ed1bfa35dd4e70f2083fa0b647f78f7e666c1a810ba9fb6ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2OCIV3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B%2F%2BgKKryvhM605xCZgOOO4eE%2BdnxNCYSZhEDf3FmKPwIgItbV4DeXgSmBhgODV4jTQUFpGNbhX9ZVKZTYcqV7Vz8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlNqd1flWT%2Bm2vSNyrcA%2FjaKoJ%2FPZ0YcaDtWfMcqhV0YF7Nr%2FF92%2F8ZhrX0GJk80Yo18Bv9SlYKudDSZ049OP4oji7yPTcfWKdlNzy9u7rOFLYtWIbPg7UvVLMA0gSfUQ8njsFVIVsQyMC9r%2Fr8QROHNrnretPy74s9OjjSCR%2FXycMtn7RPFUapKNhf6hcKWG0ij2pDOwsNw50jwYxbAm0%2F3gTxhQQPMNIV5y2gWP0L2kb78mlf1rOGOnrVJhs3Pps81%2FHQVD9xolmq11oq5Mu6itHdnCy0TXia9IFlnn4DAfdmJmLrEKZW60Q56ZYSO%2BBSSqOY1Ys7FpxbGaYKypeYcdS4VmKTbo94j6dzbnHZP6ZauKzBZJt2UN2RdwqZ3TqLkDsO0%2FfLNI646q6CmDdezJNxdQ2L8CgLt6Ph7dPTgpc%2BDvME5RVq1n2c24t0LszN1CPUZVkPKLJ2ANNylvzjZ72LeoZcENok2XS0sAV8%2FXPSpHH%2FQOmC2n7Yr2jsiTosJWHT2HLevMBorQaYienAYMdifUEqRlBvFfoqeJPw9zg06IQvc%2BbRDnfUCHw4p5g6U7LBK15eLsYsMdbKPTuuzNenc18hxbrgYkRWD8GPPXkVEf3Ri8ZJ3WWmXFPgmvOk39%2Bw99V7kZgeMK24pcIGOqUBmclud3rS6CEUnTLKskPD9iStqSeyQGpPH%2BpvFcBN%2Fkha8RVNdzmyqFYtVQy688dV7KM7YVaQJ0%2FvOhNDQkbZtjjyv7CzqpY7gW3hj86nUEAB8jH6WAdW0lbDQ6etgmXq77h%2BdAYKcBjO6RhWQVs0b0F6nQd4Mg8bqwGQ8LxzM0BGYuUs5vK1sw22sHcFe1E7ROKSLEnziVytArIaoJNwP6H3Hf8B&X-Amz-Signature=e43ec0838b667cd81b896dc0ac1503be96d28bf8149ceede1763e6c2a066e623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
