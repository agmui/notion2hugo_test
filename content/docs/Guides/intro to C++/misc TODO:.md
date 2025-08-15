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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GJI2MO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDCL8Jf76u4H%2F062nAAYFSjAITGPFL5Anh2BvwxChDacwIgZVGE74npbwSdE5CWzcDMo3ofR4yocOs0EJzIBJTYkYgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGog8ucMG1NaOo%2BnPircA9e9%2BSLXJqN1iASKMP5yhBWc5lUA2diFO1xmn%2FcuAKRgaFA3ZXcv5EwpCffv1Ji4T47%2FaLW2KMTvdRXXRjS4Of9q2Tc14NolmKRQzXA3SpRVqBcDQtwXkJ%2FfL%2F3gTUkojZPdK9gATg2oufUcc%2BSolqNxuhqTVp%2FQZTLbCQN8NLq72WwtF%2FjUCbFPJUwuCHCLbubwvK5z1Kc4no1f5QRnfenqbd47fPNCauBq%2BqPDMKf1SF%2B1eWCfg01eJb28i%2BJyd3XQ8iB9lfplqAeHY9fTUVR2J81YhTuVzeaHpQsWCOrNdPWdkEcUKrKNiuKY7lmIanas%2FnMMEd47G1w%2BOq6lRZ5zkMYZTLHADsOMN1hsNwKAHHMEulxXlY5yqukHARhzZSVv2yBOgJYPHo%2F%2FA6S%2BOR1rmdFzq2IYb9CkTiepETB63YeJHT7qdKr6i4w%2Fi1ky73nwpxxg3svecTdC9O1IN6sh%2FBRABtUXDT%2BWl%2BLcJeHNTQU3m8RfMF65REmNxblw81L2z4JUXen%2BE4ybwb2SqNFUsPAH9atX5nKhkGVBOqAwkmVA0KtmJg2GNvUdjq%2FJP%2BKM7vjOBZmgUF3zs3%2FeTalm0MwtQz4%2F1XBa9hodus1zqfTsXY8ewxS85A2nMIOj%2BsQGOqUBLSsPoTi08LiNTBl5dqVDfXWusKhSGUOYBPEfZuY7vxWjsm7%2B%2FXZstLvVXf314RmH2KYpU0pvjE8QR6FgQGGcitY1epwj4l1BwhX1Jboz8LvlGvc4IwtrLYOmXbJ5HMbnYNxTWtuDaKlPn%2Baxivs3X4lGMvMlp1xfEtjaNEk5EJUiPI8XhzN5m5MHJnmngznt9c2dpGBDax4mtVAsC%2FvvoaX0DTN7&X-Amz-Signature=a98d496a5e8fa76e4de9fe99e3450ab6f03eed839e7b799c099120a3fdab2250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GJI2MO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDCL8Jf76u4H%2F062nAAYFSjAITGPFL5Anh2BvwxChDacwIgZVGE74npbwSdE5CWzcDMo3ofR4yocOs0EJzIBJTYkYgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGog8ucMG1NaOo%2BnPircA9e9%2BSLXJqN1iASKMP5yhBWc5lUA2diFO1xmn%2FcuAKRgaFA3ZXcv5EwpCffv1Ji4T47%2FaLW2KMTvdRXXRjS4Of9q2Tc14NolmKRQzXA3SpRVqBcDQtwXkJ%2FfL%2F3gTUkojZPdK9gATg2oufUcc%2BSolqNxuhqTVp%2FQZTLbCQN8NLq72WwtF%2FjUCbFPJUwuCHCLbubwvK5z1Kc4no1f5QRnfenqbd47fPNCauBq%2BqPDMKf1SF%2B1eWCfg01eJb28i%2BJyd3XQ8iB9lfplqAeHY9fTUVR2J81YhTuVzeaHpQsWCOrNdPWdkEcUKrKNiuKY7lmIanas%2FnMMEd47G1w%2BOq6lRZ5zkMYZTLHADsOMN1hsNwKAHHMEulxXlY5yqukHARhzZSVv2yBOgJYPHo%2F%2FA6S%2BOR1rmdFzq2IYb9CkTiepETB63YeJHT7qdKr6i4w%2Fi1ky73nwpxxg3svecTdC9O1IN6sh%2FBRABtUXDT%2BWl%2BLcJeHNTQU3m8RfMF65REmNxblw81L2z4JUXen%2BE4ybwb2SqNFUsPAH9atX5nKhkGVBOqAwkmVA0KtmJg2GNvUdjq%2FJP%2BKM7vjOBZmgUF3zs3%2FeTalm0MwtQz4%2F1XBa9hodus1zqfTsXY8ewxS85A2nMIOj%2BsQGOqUBLSsPoTi08LiNTBl5dqVDfXWusKhSGUOYBPEfZuY7vxWjsm7%2B%2FXZstLvVXf314RmH2KYpU0pvjE8QR6FgQGGcitY1epwj4l1BwhX1Jboz8LvlGvc4IwtrLYOmXbJ5HMbnYNxTWtuDaKlPn%2Baxivs3X4lGMvMlp1xfEtjaNEk5EJUiPI8XhzN5m5MHJnmngznt9c2dpGBDax4mtVAsC%2FvvoaX0DTN7&X-Amz-Signature=fbe7562e179ea110399eadc2b90dd811e15423e5456269befa3428fefc15c88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
