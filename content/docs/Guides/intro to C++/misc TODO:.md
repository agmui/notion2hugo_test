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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUOOFAX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzuaiO9BTirKL63qBkc2IG2zL7j%2BbAN1ErGmi9wXB1SQIhANiJBxS20Ifd3e4BzuFldcAwzr4E96SivR74iRgf1ewrKv8DCEEQABoMNjM3NDIzMTgzODA1IgyQp8bEfQR1L31fLxoq3APT9zj%2F%2Bq%2BaK24HHEJYM9niKXGsPn6wFCegRa0mK7Rcu10qi81GeihX3cyygdsjRj01kqWnef4AsXaKh0RsyEuKK8gTU%2F6a%2B7mLRm940EOlkx59Oab2ftrAXMVmRonhXk8nYqPNV0IppHD%2FyEKfwPEfWdI57z5JeAx2hBG9AKVbbJnxT5Z8TGsVUOqB%2FwnV4rkRKddAJ5aw57kww1veDRoU2P7M15YYj3hkTcObLc45mlWBD1IvTcR1%2FN4swFnZS7DHHtDCAHRuqPSvYbotivPZhHrrXDHiUaudD57Uy3cB%2BWiGYfzA%2BgkgPwDNz4k08YRdOOIVaqGIZ21Xk1c4Kw9EcLnHKtCoDUnxbQR2sgegS6rk9fo%2Fm7uY18PEbo444gX%2BEirWWS%2BMuuVK0t2JnuLYBKhatEYcbBS5cuUbdJ48WO0d4D62ZyARvwbhoQJeUVt%2FYILluS7PPLIl7oWFtWOoxBq%2Fc7kgW%2BtdajO%2BG3Vqnqhm9J%2ByaSiFyudNvwEoAVVREeyFNx8cVKcVqVFxolBefI%2FbvD0nWHwqxiM7ARHJIltU3IB%2FG2q7Xbu1OFsOFUcY%2FaeGr0t2Jyz8ih1lyPDjrw%2FeZy%2FaER%2FpqaCqjZDL0XhD9D5%2BXppMQHm2AzDPx6q%2BBjqkASnbJZvGMDmUd4%2FxYszHwcZ7yWmwKR%2FnA6tyR%2BIoBSKlJ8RYQHYVWgPGaHV8mb9Xwo%2FjeDX342KFng83SwmtjTUJQcF9dR9hJRZbhOpnGm9oRKUu5aB%2FXy57Xe2yLNbcacoMHzTz8V4mzxKj6oZ%2B963D0CS7Bk7SYVjGOL37lOITKOMU6qPgMVeUzRqpOaowGUdrN1csDO4Q538RW%2BWIXUdHoKDK&X-Amz-Signature=670e880054ad0b9ca882c761007c809d3feeabd0807b3ab7a287207893f571ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUOOFAX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzuaiO9BTirKL63qBkc2IG2zL7j%2BbAN1ErGmi9wXB1SQIhANiJBxS20Ifd3e4BzuFldcAwzr4E96SivR74iRgf1ewrKv8DCEEQABoMNjM3NDIzMTgzODA1IgyQp8bEfQR1L31fLxoq3APT9zj%2F%2Bq%2BaK24HHEJYM9niKXGsPn6wFCegRa0mK7Rcu10qi81GeihX3cyygdsjRj01kqWnef4AsXaKh0RsyEuKK8gTU%2F6a%2B7mLRm940EOlkx59Oab2ftrAXMVmRonhXk8nYqPNV0IppHD%2FyEKfwPEfWdI57z5JeAx2hBG9AKVbbJnxT5Z8TGsVUOqB%2FwnV4rkRKddAJ5aw57kww1veDRoU2P7M15YYj3hkTcObLc45mlWBD1IvTcR1%2FN4swFnZS7DHHtDCAHRuqPSvYbotivPZhHrrXDHiUaudD57Uy3cB%2BWiGYfzA%2BgkgPwDNz4k08YRdOOIVaqGIZ21Xk1c4Kw9EcLnHKtCoDUnxbQR2sgegS6rk9fo%2Fm7uY18PEbo444gX%2BEirWWS%2BMuuVK0t2JnuLYBKhatEYcbBS5cuUbdJ48WO0d4D62ZyARvwbhoQJeUVt%2FYILluS7PPLIl7oWFtWOoxBq%2Fc7kgW%2BtdajO%2BG3Vqnqhm9J%2ByaSiFyudNvwEoAVVREeyFNx8cVKcVqVFxolBefI%2FbvD0nWHwqxiM7ARHJIltU3IB%2FG2q7Xbu1OFsOFUcY%2FaeGr0t2Jyz8ih1lyPDjrw%2FeZy%2FaER%2FpqaCqjZDL0XhD9D5%2BXppMQHm2AzDPx6q%2BBjqkASnbJZvGMDmUd4%2FxYszHwcZ7yWmwKR%2FnA6tyR%2BIoBSKlJ8RYQHYVWgPGaHV8mb9Xwo%2FjeDX342KFng83SwmtjTUJQcF9dR9hJRZbhOpnGm9oRKUu5aB%2FXy57Xe2yLNbcacoMHzTz8V4mzxKj6oZ%2B963D0CS7Bk7SYVjGOL37lOITKOMU6qPgMVeUzRqpOaowGUdrN1csDO4Q538RW%2BWIXUdHoKDK&X-Amz-Signature=8b603618579c649c1f96cfe86a2f7c10ea57c7f104ba67d363796dae761b206f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
