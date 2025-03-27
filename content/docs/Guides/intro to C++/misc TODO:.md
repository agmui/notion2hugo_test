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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG6HIFZN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHtGUOgPTz34CrgVqzX%2BQoDAM3zsmluqomk8siUsDmAAiEAp8Z9H9C535bThN6EpXttA5nK1tVGWdLsgKBkbEpGookq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIwo8Ervufwd0gRrHircA2ttkxaoFvvlUxkxH8UEKfdrahjUw3te22R3b%2FKcxqJVPHf7VmSIquTBjnuuoGR7DtwTFzSaPPABaKtsVeZhtnZ2m7PX94aB9kceldMlQUOq1aTi8RdXeDtUbFw1u5eL%2F0r2VStXg7EzB5QbFsiDIaNXeUTHb9FcoDVvnB%2BnxkiLOKY07RE9vhJNYYmSr%2BKktO3BbmqK2q%2BpYBAU%2BBv63F4Gu0NqPFVHS2uhMuo%2FWi5Zca64zdYiwZTuOosY9XUYaQ%2Bbt8Mttmea%2BdXbqfcS4EiWqPHSDg%2F1Yk3Dru9itLUmDM1G5laC1jrI%2BSYr0o1FI4LRht6Zk2GujfAEwDf3Y912ty%2BxeS2JHx5RP%2FtWZjzAnHXEOmZ7PHR0y4EllD%2F8X4F6ocPIMVsbxC7r3vVGYkPZBrB%2BOcIJJ75Z%2FyUL%2Fj%2F0c4NkWdKDkN9Lm35v8YHGsLFcduCMkqRPK4FRxS5%2BLrnbLj%2Buz7H4IiDaHBt7QjcRh%2FcWEkyfDz0GTpfGjfZnv4TD1MX1AxHwb4AZnWe3mpGgwST14tRTIHlPnSNeDiG3Rm0jtUsDCuCrcbGSUuc7EQYIgIXawAcpuPqipkLOMfckZbgKvS67St2%2FMSxtebrjXXYaErQB%2BwrLGK3WMJ2Okr8GOqUBCj53aCfhv3GyXItwXj0Z1Xs9uMRz8QCte%2F1nR7py5ol%2FpH9I5V9obOXoxh1mhgRmP3wfGPlEC6ZdA8LI%2BM1OCKQLd54YOvwl1Q37vgDN4xHTeTyzHtiUfsNG6fq%2Bu2Sn6WAu9fm3%2Btmy16q3Ck1Kbnd3vvs1Oos%2BKfBLH04FX6PDgnnlZvC9uYOjQxSRqXp1cM0cayeYbx8dpq3g7npPz1yAbDC6&X-Amz-Signature=331b7c53ea8e81bed8949d98840dd5dc9bd4538ae69815a2c1941985ab90d1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG6HIFZN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHtGUOgPTz34CrgVqzX%2BQoDAM3zsmluqomk8siUsDmAAiEAp8Z9H9C535bThN6EpXttA5nK1tVGWdLsgKBkbEpGookq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIwo8Ervufwd0gRrHircA2ttkxaoFvvlUxkxH8UEKfdrahjUw3te22R3b%2FKcxqJVPHf7VmSIquTBjnuuoGR7DtwTFzSaPPABaKtsVeZhtnZ2m7PX94aB9kceldMlQUOq1aTi8RdXeDtUbFw1u5eL%2F0r2VStXg7EzB5QbFsiDIaNXeUTHb9FcoDVvnB%2BnxkiLOKY07RE9vhJNYYmSr%2BKktO3BbmqK2q%2BpYBAU%2BBv63F4Gu0NqPFVHS2uhMuo%2FWi5Zca64zdYiwZTuOosY9XUYaQ%2Bbt8Mttmea%2BdXbqfcS4EiWqPHSDg%2F1Yk3Dru9itLUmDM1G5laC1jrI%2BSYr0o1FI4LRht6Zk2GujfAEwDf3Y912ty%2BxeS2JHx5RP%2FtWZjzAnHXEOmZ7PHR0y4EllD%2F8X4F6ocPIMVsbxC7r3vVGYkPZBrB%2BOcIJJ75Z%2FyUL%2Fj%2F0c4NkWdKDkN9Lm35v8YHGsLFcduCMkqRPK4FRxS5%2BLrnbLj%2Buz7H4IiDaHBt7QjcRh%2FcWEkyfDz0GTpfGjfZnv4TD1MX1AxHwb4AZnWe3mpGgwST14tRTIHlPnSNeDiG3Rm0jtUsDCuCrcbGSUuc7EQYIgIXawAcpuPqipkLOMfckZbgKvS67St2%2FMSxtebrjXXYaErQB%2BwrLGK3WMJ2Okr8GOqUBCj53aCfhv3GyXItwXj0Z1Xs9uMRz8QCte%2F1nR7py5ol%2FpH9I5V9obOXoxh1mhgRmP3wfGPlEC6ZdA8LI%2BM1OCKQLd54YOvwl1Q37vgDN4xHTeTyzHtiUfsNG6fq%2Bu2Sn6WAu9fm3%2Btmy16q3Ck1Kbnd3vvs1Oos%2BKfBLH04FX6PDgnnlZvC9uYOjQxSRqXp1cM0cayeYbx8dpq3g7npPz1yAbDC6&X-Amz-Signature=3204ab0e3cfb507d50f9a51142a7056b7e7d8d940f0cd3fb85aca80a3d429a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
