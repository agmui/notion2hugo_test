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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JEITSQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN1sUxjV3eLvWmUF6%2FexeQYybV06vE9tIdAMVC7xIoyAIhAIafy5EYWVQqPdPusvUCBLRKrd8IjFikmNCM7MaE7O6%2BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Gj42b3%2B0M9ZbbG4q3AOGQQrToN%2FsZiU7%2FjTAVMeqf2ellkTnQwj0aWUbxIHMrcunznjpwk8QHz3tGguICxSUeESeRRBkK4XtPUkUSv05cF9oTsG5hHH5WZcT2SMduroh%2F00PWorDEGcxPq97BKch7lSBZzjbqOgd5M2MWBtrS%2F9Yc72pmIr%2FQ6pAyHPFl3KpOTc5Yfjl3Dt0EmZsh1NhrqwHul%2Bi0k%2BhZjq5%2BqStOijH9CEF2VzB%2F9wdRp236X%2BKVv1HJ6Kcj0uMbMUVd9yHdJ1CRt3HrRv2Dal613ziPVAFfS5p2umS3G9jBsZnrVagHM0sYBPUh3dIj%2BRoUW6GaOjJTdEyc4VQh3hRtx5Rlqj3CGC6Fhxp218b%2BUzcYyd6h0Gsit7fg10DLCAoPjz08zrdEd%2BJWjn2YtIDiLRJWJGpqwxwTmA%2FawZiXqOEmXuIYO6pkMM%2FkM7yJRL42hk6DfNtsYwghn%2FZMqRLL5n5dZZX7Xzr1ETstZDj6ffTukoD%2BiN4Q4QGlxknChHX8iqPeaq0GP5pGnjf969Ty6xJpSznduykSybYVgjti6p3YYtk4gcLEv7vpRQRp4CxxUA%2Fcg541w%2B90k8%2Fh6AlFKCc67JNJQu9TAg%2FIuulDApPKVCLy40S9Bf565S5%2BDD9uNC%2BBjqkATNd76gv0kij%2FoWvuZaIhYi4H2lsHIke52E25MgPaRYkYcEAJHOHW8k3xl2wBECSnVrgwNHdrbwFLN5SF0JJTOEXndKk8XvHnWmbrlHERpvDVyd3bWMSUfefACEq0vqgLV%2BtSoNAlgCco71JmK4pY5eAWI%2FOetnhBpfqFZEgES%2F1Q7QrN370jB6GYwp24OiujbrajiMZk1WmCjkhzip3x3uR6VWO&X-Amz-Signature=c789da5d685103e46d3438c34f685a05491b9caecf63840ec974ac64831e39bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653JEITSQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN1sUxjV3eLvWmUF6%2FexeQYybV06vE9tIdAMVC7xIoyAIhAIafy5EYWVQqPdPusvUCBLRKrd8IjFikmNCM7MaE7O6%2BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Gj42b3%2B0M9ZbbG4q3AOGQQrToN%2FsZiU7%2FjTAVMeqf2ellkTnQwj0aWUbxIHMrcunznjpwk8QHz3tGguICxSUeESeRRBkK4XtPUkUSv05cF9oTsG5hHH5WZcT2SMduroh%2F00PWorDEGcxPq97BKch7lSBZzjbqOgd5M2MWBtrS%2F9Yc72pmIr%2FQ6pAyHPFl3KpOTc5Yfjl3Dt0EmZsh1NhrqwHul%2Bi0k%2BhZjq5%2BqStOijH9CEF2VzB%2F9wdRp236X%2BKVv1HJ6Kcj0uMbMUVd9yHdJ1CRt3HrRv2Dal613ziPVAFfS5p2umS3G9jBsZnrVagHM0sYBPUh3dIj%2BRoUW6GaOjJTdEyc4VQh3hRtx5Rlqj3CGC6Fhxp218b%2BUzcYyd6h0Gsit7fg10DLCAoPjz08zrdEd%2BJWjn2YtIDiLRJWJGpqwxwTmA%2FawZiXqOEmXuIYO6pkMM%2FkM7yJRL42hk6DfNtsYwghn%2FZMqRLL5n5dZZX7Xzr1ETstZDj6ffTukoD%2BiN4Q4QGlxknChHX8iqPeaq0GP5pGnjf969Ty6xJpSznduykSybYVgjti6p3YYtk4gcLEv7vpRQRp4CxxUA%2Fcg541w%2B90k8%2Fh6AlFKCc67JNJQu9TAg%2FIuulDApPKVCLy40S9Bf565S5%2BDD9uNC%2BBjqkATNd76gv0kij%2FoWvuZaIhYi4H2lsHIke52E25MgPaRYkYcEAJHOHW8k3xl2wBECSnVrgwNHdrbwFLN5SF0JJTOEXndKk8XvHnWmbrlHERpvDVyd3bWMSUfefACEq0vqgLV%2BtSoNAlgCco71JmK4pY5eAWI%2FOetnhBpfqFZEgES%2F1Q7QrN370jB6GYwp24OiujbrajiMZk1WmCjkhzip3x3uR6VWO&X-Amz-Signature=20cd3e4c73651cb7958ad4d07352f19be7eff2a906a3c25823ce7d0210af5d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
