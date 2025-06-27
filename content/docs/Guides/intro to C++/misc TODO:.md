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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T43SISE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICUFt7sv97iKDGzI8qYl%2BLp75D9YY9TG4CgzfPuWNvneAiEAkdCar8QmagTHtuP9PN5ZuD6XXO2KyaAtVvTCBD0x9Koq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCD0POgmsmVQFtl3%2FCrcA9oQGaosuapGVB9Z%2BGf06XyZI6xQcDGerKrIlYb3%2F4%2FiX2pZFDwAtBnQ6ZRNwGdVyVI9PttiAuShkHonkWaLC%2FHHLkbDTppyt0cbtzKPP9uTRIC45EY7mEutMHKVaFWsQgYpi3TzhNEEVgXkxEB6%2F2C%2F4T7bK1swf7cDRUMkwVKoQyxWtE7xptbjRiUZZn2lRrnyRnPT6ICU8Oym%2BuIqy%2FFt2gUCG%2Bwki%2FG%2BGFDtyNg4xb3r1i3cJkXCMovqU2NhGyCgNt%2FIEhshhm0K85bpM3FHprd%2FANvGmDr8ASQ0YgDeLD4ar5QEnIGIsxJ6v%2FfwBzmq7OFsmTo2co5mAadLGFweMwNSjvBJaf63Gc4O4I0U6DJtLJp0lAgtj3uTZqXnQCV6IAmmP7ixPJvmi3wbsOu%2FP8z85JXH6bXJG2CjcFfKIFsmBQg4hYlicDUO3AiG0MRBqI5ROfDFngOv%2F5SFBAaF%2BMuUTxKsM7N13DmClXkZJ9B5hx%2BMK1RnNHBNivv3kap9mM2GCogISJF08%2FgLADRQ5099N913NMWt7TOk%2FIQZP%2BZO88vEWtEUdni9n6Wphx6ErDsXaVnnvDXVMfFGq0r%2FNqSOwU52ClsenWNH6zCQu%2BJHf9EoeR%2FMJgtLMPKl%2BsIGOqUB6mBxDrZRN8Q9AQNkhUHXsybVmZB8vGV%2FdqJNbutNmQlbX9X0mfpBmkH9c2Sp%2FHrPZ8fvYy%2BNvys55lQSmIQUsE63raW2dBIUiYok%2FvA8IIjc80l2JKl8Tm874FZ%2FM%2Fn2NUYWmSvTa4rhZ93ONNplzN6Q65udxFVUrLGA2QJ%2FmQ0aTLn93DuRK%2FrtywQFgrZDSRvSmyuUHs8JVMZMXfGGmzUDnSnR&X-Amz-Signature=a0544f048e366b9667f097190af34fb8290d0853a975a215689cfb0fc10e85f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T43SISE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICUFt7sv97iKDGzI8qYl%2BLp75D9YY9TG4CgzfPuWNvneAiEAkdCar8QmagTHtuP9PN5ZuD6XXO2KyaAtVvTCBD0x9Koq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCD0POgmsmVQFtl3%2FCrcA9oQGaosuapGVB9Z%2BGf06XyZI6xQcDGerKrIlYb3%2F4%2FiX2pZFDwAtBnQ6ZRNwGdVyVI9PttiAuShkHonkWaLC%2FHHLkbDTppyt0cbtzKPP9uTRIC45EY7mEutMHKVaFWsQgYpi3TzhNEEVgXkxEB6%2F2C%2F4T7bK1swf7cDRUMkwVKoQyxWtE7xptbjRiUZZn2lRrnyRnPT6ICU8Oym%2BuIqy%2FFt2gUCG%2Bwki%2FG%2BGFDtyNg4xb3r1i3cJkXCMovqU2NhGyCgNt%2FIEhshhm0K85bpM3FHprd%2FANvGmDr8ASQ0YgDeLD4ar5QEnIGIsxJ6v%2FfwBzmq7OFsmTo2co5mAadLGFweMwNSjvBJaf63Gc4O4I0U6DJtLJp0lAgtj3uTZqXnQCV6IAmmP7ixPJvmi3wbsOu%2FP8z85JXH6bXJG2CjcFfKIFsmBQg4hYlicDUO3AiG0MRBqI5ROfDFngOv%2F5SFBAaF%2BMuUTxKsM7N13DmClXkZJ9B5hx%2BMK1RnNHBNivv3kap9mM2GCogISJF08%2FgLADRQ5099N913NMWt7TOk%2FIQZP%2BZO88vEWtEUdni9n6Wphx6ErDsXaVnnvDXVMfFGq0r%2FNqSOwU52ClsenWNH6zCQu%2BJHf9EoeR%2FMJgtLMPKl%2BsIGOqUB6mBxDrZRN8Q9AQNkhUHXsybVmZB8vGV%2FdqJNbutNmQlbX9X0mfpBmkH9c2Sp%2FHrPZ8fvYy%2BNvys55lQSmIQUsE63raW2dBIUiYok%2FvA8IIjc80l2JKl8Tm874FZ%2FM%2Fn2NUYWmSvTa4rhZ93ONNplzN6Q65udxFVUrLGA2QJ%2FmQ0aTLn93DuRK%2FrtywQFgrZDSRvSmyuUHs8JVMZMXfGGmzUDnSnR&X-Amz-Signature=e980ab381103b4ce7210ca42c317259be2a26e40ec88aca55e3b7b2a4730e080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
