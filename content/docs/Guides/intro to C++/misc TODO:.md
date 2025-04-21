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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65IRM7K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCPTOXUT1fGnkj1oayr8QS6iigy4gExHiW0MGrtyu4SHAIhAIT%2Bvo3q0qH0jcQ0X1g%2Bukhu52dQTaXFh%2BkRiw3wbUOtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BA8Tye9x3xDiTLlkq3ANdu1YFdBg%2BRWOghKOJwlXlcOc%2FB6LkyPWcHRDMIhFnyMtxKpgocs41fb8uqJW%2BX33CbbTHFxYqgshGWzwOR%2BZR0kaxM4LYeNedBPV6hz2sCCCTyjOhgZbjAVtGykkiDHUt4xRoUh9SwvXEmAyZiYqBJ8fimqttQHfylGUZUUwvKF0N0gVmdRCr2dtmh44LfDYG1YNDTDVB4IVRebKbgk6iyYjqHYQjNulSpOPPb9tvr5IrY8RjiZ29qc3FWkS%2BMgsa7ASnvH%2FRsLArXOOPUKsNHzoVrfeKpqC6Gjq02whJzAt3erSVUyRITHDd3sRL1BnNhnqMJTJon8BdjJFp3%2FvY3F%2BV7jxiq%2F3zO4Cne7%2BllgQUAgIBCnFfi06aRGc0o3eTddDABUEHiTuDld21Gwg6xKy3nrr7wjRQJEvQFo%2FD2JsMATnVCHpVAgtFhV%2BHySm03tHXq7Iv2L%2Bll3lw%2FMmukw1wqVO24GyaoSYwwYNTacYWpFZzNE3lW45BUKM4eOFfU5GR5jiR5elwXlqU3fNaVmkBbtmwY78OIQ5ASGXkT5t%2F6HueJFHuFW%2BbTC4rUjW3QEY9uXZe5oFFCyGgh3DFZTW4MjPjQAC6mhQCIqnIgI%2Bt37O1lZhKN4jOljCIupnABjqkAesOXxD5s1ADHr%2FqTz0964EBaDjFhThaZS%2BE0NmTexDXaLSF%2Bhgh9F5aHLR0F7NkImIA3NJQCFnPs1uFIVP7sMFfMZOKxNi5yf00ZWor%2BL5UMAAxc4evVAY8BGutS3rXZU%2FIvmiqSI5SD0rjzMqWSGNfTtomh239O0f9M6GRlVTvod3ItS0cSQfLmmfGCS8whyVWpZbAvgAY6eubv4%2FYbQN5mLRQ&X-Amz-Signature=2dddabb9419c3f41923bcbd8bd5cb99ec44414ff76cac72285673861958a7472&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65IRM7K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCPTOXUT1fGnkj1oayr8QS6iigy4gExHiW0MGrtyu4SHAIhAIT%2Bvo3q0qH0jcQ0X1g%2Bukhu52dQTaXFh%2BkRiw3wbUOtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BA8Tye9x3xDiTLlkq3ANdu1YFdBg%2BRWOghKOJwlXlcOc%2FB6LkyPWcHRDMIhFnyMtxKpgocs41fb8uqJW%2BX33CbbTHFxYqgshGWzwOR%2BZR0kaxM4LYeNedBPV6hz2sCCCTyjOhgZbjAVtGykkiDHUt4xRoUh9SwvXEmAyZiYqBJ8fimqttQHfylGUZUUwvKF0N0gVmdRCr2dtmh44LfDYG1YNDTDVB4IVRebKbgk6iyYjqHYQjNulSpOPPb9tvr5IrY8RjiZ29qc3FWkS%2BMgsa7ASnvH%2FRsLArXOOPUKsNHzoVrfeKpqC6Gjq02whJzAt3erSVUyRITHDd3sRL1BnNhnqMJTJon8BdjJFp3%2FvY3F%2BV7jxiq%2F3zO4Cne7%2BllgQUAgIBCnFfi06aRGc0o3eTddDABUEHiTuDld21Gwg6xKy3nrr7wjRQJEvQFo%2FD2JsMATnVCHpVAgtFhV%2BHySm03tHXq7Iv2L%2Bll3lw%2FMmukw1wqVO24GyaoSYwwYNTacYWpFZzNE3lW45BUKM4eOFfU5GR5jiR5elwXlqU3fNaVmkBbtmwY78OIQ5ASGXkT5t%2F6HueJFHuFW%2BbTC4rUjW3QEY9uXZe5oFFCyGgh3DFZTW4MjPjQAC6mhQCIqnIgI%2Bt37O1lZhKN4jOljCIupnABjqkAesOXxD5s1ADHr%2FqTz0964EBaDjFhThaZS%2BE0NmTexDXaLSF%2Bhgh9F5aHLR0F7NkImIA3NJQCFnPs1uFIVP7sMFfMZOKxNi5yf00ZWor%2BL5UMAAxc4evVAY8BGutS3rXZU%2FIvmiqSI5SD0rjzMqWSGNfTtomh239O0f9M6GRlVTvod3ItS0cSQfLmmfGCS8whyVWpZbAvgAY6eubv4%2FYbQN5mLRQ&X-Amz-Signature=1975a2ab5f95a2b066357bd37afc9a3a3243d68b9c16782ae6a922a852700425&X-Amz-SignedHeaders=host&x-id=GetObject)

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
