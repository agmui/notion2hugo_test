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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6OWN3W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjgiBkXmzegovC4QgHfWKlQoTbu%2FaHArHmrHwyCuhfQIhAJvibPp%2FnKZ1yvziEr5oIgFamzof0NOythu0n6Zx5Jb%2BKv8DCEAQABoMNjM3NDIzMTgzODA1Igx%2FZxtiUHVvVn1QGJIq3AM4ybwSVL4mj4tVc9R3n70M2m%2BcWM73SfCGil6gMjjb%2F%2FN6ZZF5ntzs7z00sVsaHpiVRWxl%2BiYfqaGizX%2Ff3xZQdaFWn%2FApllDKtFKSHHkpFRJ0exPuWhopcbeK4AABFD7eCNH8HWojqVerVztr2%2BjW%2BY7KUiDXYy4kmJUzSYlMjqsVLWIVOqwLHjw5KVe6YWtDSDNdZHL8NawPZvVDqbk0oCiGCxYY9OsOzK9ivsXHCfKNBA78AhmA11pPVnKoLzCvKxJuPR75noQInGG8MIJCxicxHPu1rlwVH1Jc5IIKj6nHLgYjt77KpHCFPVSCba3PCkoWPxIl1xaF4To%2FtojHUrb7TPehntodiUCmtOPa793SSR%2BWq%2BU%2B6THYgudYKuPyEkUlUtmx6AaFG1MdtnkFB%2Fqcap%2BxQaQvwIcYmx0ryoiPP59NvK6kIyk89%2B%2BlpPcZXQU1TKnrkONaBhVriolsVmC5VExaaW%2BflJ5J07K8R6UGvm5DFh3gfFuTBXaFNQXz%2BY01VuUfk%2F8RCzVbdg9GC7z3%2FCvbWL0sYOIO6e5kWNZvv%2Bd%2F5PowsiJ50vwWO%2FdDUN2yppXciTeAiOMBZuRdEUZnShSasamiNNeaHYQ%2BCR6lcZrHvCVCDVPDCzCqifbEBjqkARnn1cNcpIBbP08O3eQfIc5n%2BJJh8xT3OFHB0%2FXLJNleOQ1WvqtSUuJ27KYbCC6KZ3qM6yYpFkFC%2FfMVixDmEq%2BBHo4yyu9mYPx9k3Siygt1mv5RNrFi02aM%2BYklROaY3QrCZ8b03%2F%2Fr0TlgGWcv9R1riRc8azrmuPwYnyfD3teMEmHPJtZX%2FIe8mC4EV4tXZLrs6K7IfrvhlRMFDPtEhr5aXR05&X-Amz-Signature=6b78c60cf5917bd45152d5ca17d66f00ee758d1e18dfa3428c418b3455d5e4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6OWN3W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjgiBkXmzegovC4QgHfWKlQoTbu%2FaHArHmrHwyCuhfQIhAJvibPp%2FnKZ1yvziEr5oIgFamzof0NOythu0n6Zx5Jb%2BKv8DCEAQABoMNjM3NDIzMTgzODA1Igx%2FZxtiUHVvVn1QGJIq3AM4ybwSVL4mj4tVc9R3n70M2m%2BcWM73SfCGil6gMjjb%2F%2FN6ZZF5ntzs7z00sVsaHpiVRWxl%2BiYfqaGizX%2Ff3xZQdaFWn%2FApllDKtFKSHHkpFRJ0exPuWhopcbeK4AABFD7eCNH8HWojqVerVztr2%2BjW%2BY7KUiDXYy4kmJUzSYlMjqsVLWIVOqwLHjw5KVe6YWtDSDNdZHL8NawPZvVDqbk0oCiGCxYY9OsOzK9ivsXHCfKNBA78AhmA11pPVnKoLzCvKxJuPR75noQInGG8MIJCxicxHPu1rlwVH1Jc5IIKj6nHLgYjt77KpHCFPVSCba3PCkoWPxIl1xaF4To%2FtojHUrb7TPehntodiUCmtOPa793SSR%2BWq%2BU%2B6THYgudYKuPyEkUlUtmx6AaFG1MdtnkFB%2Fqcap%2BxQaQvwIcYmx0ryoiPP59NvK6kIyk89%2B%2BlpPcZXQU1TKnrkONaBhVriolsVmC5VExaaW%2BflJ5J07K8R6UGvm5DFh3gfFuTBXaFNQXz%2BY01VuUfk%2F8RCzVbdg9GC7z3%2FCvbWL0sYOIO6e5kWNZvv%2Bd%2F5PowsiJ50vwWO%2FdDUN2yppXciTeAiOMBZuRdEUZnShSasamiNNeaHYQ%2BCR6lcZrHvCVCDVPDCzCqifbEBjqkARnn1cNcpIBbP08O3eQfIc5n%2BJJh8xT3OFHB0%2FXLJNleOQ1WvqtSUuJ27KYbCC6KZ3qM6yYpFkFC%2FfMVixDmEq%2BBHo4yyu9mYPx9k3Siygt1mv5RNrFi02aM%2BYklROaY3QrCZ8b03%2F%2Fr0TlgGWcv9R1riRc8azrmuPwYnyfD3teMEmHPJtZX%2FIe8mC4EV4tXZLrs6K7IfrvhlRMFDPtEhr5aXR05&X-Amz-Signature=4e745296008573da5da2c9155635ab629f16aa1483bc0202bb45a0ed0cd0a479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
