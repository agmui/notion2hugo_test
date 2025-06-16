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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVERFYS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBUAzj%2BC58lD5OGh71IKdau8UA8twTbHZJsgtmQ7bWeWAiEArLuwUHL1juUM4XEcQapzrgVFHcZBw0pCkqN0TBgRc70q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJMIZ7O11zKjXv7OECrcA%2BtHVtGrwD9%2BZNr1h6PYwWqDrjbp3us%2Fu5pDOaB7A4moFUW5Y1Nm2cHkLji9dGVElMr8DcbY2tf7Xi4bzXZ3gE2EPhSmukbhBZISW0P2FwtjSEPmjUNVgyH2t%2FbmMbWtfvDzwozT%2BE6%2B5810XQraGYaOwCioFWJjS4f2nkFfWPpSJIoDyaPP5616uZieIQXnp5ri3c6g6QWxveCd9QcPep7MlVHbgKeKVYmhW07haCaXotZoKcnqmeBHFFnp5OX%2FM5QA%2Bv%2FCtc3L94kZg8p6qE9sUumQUb4VbWnT1TBYSnwc0I%2FYXgOpXq%2Bri4qYfv2EzNQ%2FjmqZw8NQ8vJkVcmRd406mkhK8ka8AfOy%2B5gUr0vmNfZbQMl6lZj7VB15jm%2BtpTWt%2FOw5AV22YrW9L0o4OQFjw%2BmaO9AHzq8hoSsmzZVKj9AVC%2Fyw1p66%2B1DrwAjM1on%2F3Cm04MhJ5ef2sm1tM0shgy1cf5Ah46rM0NyJRzCDibN0D5nTqcxKA88Lu1qJoxefR%2Fl545Xdiing%2BsjKcZL6z2DKikZyn%2BO4j3IS1xuTxz%2Br2Z4KSu%2BfGI8i1cjMmwVMQJEnGKKS3jVATb5%2FGDGX5ELQndiEYwmiJiRCB4s5df1%2FP0DMK4McbZQZMOKuvcIGOqUBaSvZsxJi59grf5iG4%2BM38kZ8Qmt00PcCiT72sS2P35bjQWIcsaMaK5GFs6JPXUBzLf72SJBMnxWdzJBLzLSIdE6a3YrjGQwkqREbSviXMpIZ%2F%2FHzTZs%2Fj%2BNAONYicVsv%2BwmbeTlSBIbiUftN6ACpZeRq99x5gWHCLeaAMJF096lodPm9lfUmJO9POIIEvnSs2mIFV1OMGDCxMmySWHhe1KF9iNo7&X-Amz-Signature=9f57f4e0466b6466ac3298ac2bbdf34664917e841b93bca9342f38dcbace4dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVERFYS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBUAzj%2BC58lD5OGh71IKdau8UA8twTbHZJsgtmQ7bWeWAiEArLuwUHL1juUM4XEcQapzrgVFHcZBw0pCkqN0TBgRc70q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJMIZ7O11zKjXv7OECrcA%2BtHVtGrwD9%2BZNr1h6PYwWqDrjbp3us%2Fu5pDOaB7A4moFUW5Y1Nm2cHkLji9dGVElMr8DcbY2tf7Xi4bzXZ3gE2EPhSmukbhBZISW0P2FwtjSEPmjUNVgyH2t%2FbmMbWtfvDzwozT%2BE6%2B5810XQraGYaOwCioFWJjS4f2nkFfWPpSJIoDyaPP5616uZieIQXnp5ri3c6g6QWxveCd9QcPep7MlVHbgKeKVYmhW07haCaXotZoKcnqmeBHFFnp5OX%2FM5QA%2Bv%2FCtc3L94kZg8p6qE9sUumQUb4VbWnT1TBYSnwc0I%2FYXgOpXq%2Bri4qYfv2EzNQ%2FjmqZw8NQ8vJkVcmRd406mkhK8ka8AfOy%2B5gUr0vmNfZbQMl6lZj7VB15jm%2BtpTWt%2FOw5AV22YrW9L0o4OQFjw%2BmaO9AHzq8hoSsmzZVKj9AVC%2Fyw1p66%2B1DrwAjM1on%2F3Cm04MhJ5ef2sm1tM0shgy1cf5Ah46rM0NyJRzCDibN0D5nTqcxKA88Lu1qJoxefR%2Fl545Xdiing%2BsjKcZL6z2DKikZyn%2BO4j3IS1xuTxz%2Br2Z4KSu%2BfGI8i1cjMmwVMQJEnGKKS3jVATb5%2FGDGX5ELQndiEYwmiJiRCB4s5df1%2FP0DMK4McbZQZMOKuvcIGOqUBaSvZsxJi59grf5iG4%2BM38kZ8Qmt00PcCiT72sS2P35bjQWIcsaMaK5GFs6JPXUBzLf72SJBMnxWdzJBLzLSIdE6a3YrjGQwkqREbSviXMpIZ%2F%2FHzTZs%2Fj%2BNAONYicVsv%2BwmbeTlSBIbiUftN6ACpZeRq99x5gWHCLeaAMJF096lodPm9lfUmJO9POIIEvnSs2mIFV1OMGDCxMmySWHhe1KF9iNo7&X-Amz-Signature=8bf3367c2a67f6a71b3379d68c2c6c25456930472cd35673e9008cc53825eb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
