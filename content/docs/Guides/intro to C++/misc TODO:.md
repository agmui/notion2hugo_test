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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNZ673B%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX76iMzPU7vu7X%2FhtSzUGaIbOgF4OH52ebTSe3GGPH9wIhAJdN1InQHOI%2Fbb6Q6%2Blgt%2BbxjTx8HiyjWb0esGderIPIKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJW98Jih6yBoc1K0Yq3APwq1aTjZwkjZ%2BUIPELhML5X%2FRc%2FnFQd53%2BuNoU3rZ8orwCieT1qNg9UhvK%2FbiBcufc4bSUpnwmyywrU5AK6GjWpWT6eMKskiQts7TpJeiIyfyjDDup11wy9B8ChTsmnuGNfVpa6bHm%2Bj1io11TLV1jsADPN4qxsGn6Z7iLkTAoKPc1oL%2FI0n7d4nO6JrRutwa5FRpD2ud%2Fq3u4HqBVB9Lfp2CJsT6yWX%2BriXKdJVSAwO7EinSMnkb9vXrDo0kag5IBr2easJVnd%2Baer1N6Yl4G10B9l6SeCKd2o64rTWOKL6A3moJUH8z1NSXndmbEOnmDO8PQfVd%2BCzEy0GibG%2Bl3JUlJdH7fMHhAPGUdygPdqyeR2oH2xsjpAFGz6BGytela3ByTXUqXFsfrcwZgm7Ci1bD05%2BEgwG5DYN6QRGIMMbMZLMaGeL%2BqasTvOHscizhFV5ikBoLHJnMLAYCm0FFJmFGAK%2FOrRK378Zdk7BXNvh3sDebFmFmPxJBlB7L1Z2vNJACpIXKkM3Es%2FKeS0s%2BQO%2FHwsfGY%2F1M6f1FGruIhhURW6pvA1jVuGNTYL8er9ifNXetXlEW0WGGu36qvsRAC2C%2BqwanKfAQxf09YYu2kTi8Yl%2Bp4Z%2F62W9TTODCxx%2BW9BjqkAZ1A4lOlvZ5Zq3QRr%2BQFnHquX7xw70%2FjUEcJibJJFMCKKhjHZhFPJIvoZYm0BzOD3j82vdid13mNVKOSzUIpNwGOmkkoZOAXpUW45pW7gWscSZpefFz7sNMAHWpHUqyhjFbejpbBFAprjU5OaemcNtwR2k1FyFRLm8KZR5WIeUaXNABP%2B6qw0eTZMpy9IWLKchKAfiRzaLBKenuZtqqqrRuu3QbB&X-Amz-Signature=882ba4b140a063739c7dec935b4707a87fe4f1d53e6ca6133bfd4ac7ab89321e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNZ673B%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX76iMzPU7vu7X%2FhtSzUGaIbOgF4OH52ebTSe3GGPH9wIhAJdN1InQHOI%2Fbb6Q6%2Blgt%2BbxjTx8HiyjWb0esGderIPIKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJW98Jih6yBoc1K0Yq3APwq1aTjZwkjZ%2BUIPELhML5X%2FRc%2FnFQd53%2BuNoU3rZ8orwCieT1qNg9UhvK%2FbiBcufc4bSUpnwmyywrU5AK6GjWpWT6eMKskiQts7TpJeiIyfyjDDup11wy9B8ChTsmnuGNfVpa6bHm%2Bj1io11TLV1jsADPN4qxsGn6Z7iLkTAoKPc1oL%2FI0n7d4nO6JrRutwa5FRpD2ud%2Fq3u4HqBVB9Lfp2CJsT6yWX%2BriXKdJVSAwO7EinSMnkb9vXrDo0kag5IBr2easJVnd%2Baer1N6Yl4G10B9l6SeCKd2o64rTWOKL6A3moJUH8z1NSXndmbEOnmDO8PQfVd%2BCzEy0GibG%2Bl3JUlJdH7fMHhAPGUdygPdqyeR2oH2xsjpAFGz6BGytela3ByTXUqXFsfrcwZgm7Ci1bD05%2BEgwG5DYN6QRGIMMbMZLMaGeL%2BqasTvOHscizhFV5ikBoLHJnMLAYCm0FFJmFGAK%2FOrRK378Zdk7BXNvh3sDebFmFmPxJBlB7L1Z2vNJACpIXKkM3Es%2FKeS0s%2BQO%2FHwsfGY%2F1M6f1FGruIhhURW6pvA1jVuGNTYL8er9ifNXetXlEW0WGGu36qvsRAC2C%2BqwanKfAQxf09YYu2kTi8Yl%2Bp4Z%2F62W9TTODCxx%2BW9BjqkAZ1A4lOlvZ5Zq3QRr%2BQFnHquX7xw70%2FjUEcJibJJFMCKKhjHZhFPJIvoZYm0BzOD3j82vdid13mNVKOSzUIpNwGOmkkoZOAXpUW45pW7gWscSZpefFz7sNMAHWpHUqyhjFbejpbBFAprjU5OaemcNtwR2k1FyFRLm8KZR5WIeUaXNABP%2B6qw0eTZMpy9IWLKchKAfiRzaLBKenuZtqqqrRuu3QbB&X-Amz-Signature=c24aa585fb54566fd2b12bf56dd7a5dc20f8b6f63cb2ccdd1cf0da6a8f2bfc59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
