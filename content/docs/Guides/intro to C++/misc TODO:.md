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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHTW7H%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvIm2sY386bKvASkoVMGxcE8QY%2BWB7szhZm%2FB2OOilNAiBFzk9z%2FPGNfnct6VQmHzboGJHiIkH3X3Zz97h%2BJwUN2SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJHw%2FuvuXxRetSMyKtwDXzE82%2B9Jg%2B5hWgpT5XXxQGX%2Fv%2FI07YsuQAS9Ydq%2BmwJZN8wPov7pHqQ%2BiCBtbm3XPcyYmjmvu8Cb3hHSkLsfKIUfx3C3s1W5rpm7nMqIddikzV4CmOU5ozjPVelMceO1eQvfNICsW61v8BbNFEtALGcIqJJI4uNSUYrIMySZBoDgd8jajIO1DPdSm5o7JAB792qiWEREfXo95iUcTFIBl0x09vA2XD915bo9Pi3am7pww38JoAtcCjmqY%2BtYpEvHgdFZB1u%2BKnA1hjyaFF88gM9nPnPq9BlZXUGH7U%2Bbs2paa5nk%2BS2%2F9JItU1Snry74dWbbDzdiseTK%2BgRYwd0gypftGJyIDeVE0AYm02niyhRQAjCDN7IClp0HlmglEOTEQ0VpN%2B%2F3VhQ0%2FhSQyhzylhzAfzFUXCb%2FGOtqkh8kl3JFufKRy84TaSDYDOqbGx8GoUr%2Fm6niApQfUMwEmjOSKxhJKGok9xlyKshPKSVugTJf5i0fYysdpSjH89ZSCMss%2FNoA2CdRIuc2MkzlGQvlMR0CFS2jNVqfqYesw39pumPkKjGfV4ptPLxRclTxKNZ3nc0FOPpVDqk79U79AzpiqGZ4JZJmQMz83wkC6OPOqMw%2BJ5qLlo9kUlmn%2FNYww5OxwQY6pgE0JliHjSzUJeG4hWN%2Fdvn06M32WyHkh8FApRRecXBBkGWR5J8phS3ibAH7J22KuSZQOFVgz0czJzc5eKVSauIqa1MQt9Cgomif5Q7rzzqzCaG0SppOKqGmfyUQjv0U0gnaAM9zg3r4Brca26OB7FwQd21wS8tPa5e5ipiKDTcAUWuLVdVjry5sTtEsVZgxgdZz4BkweobQ%2FVEUWPrmQZEXA4FhKbFW&X-Amz-Signature=706dd8ddce75f44caab8066f238a91cc6782b063952477bd591cacd045f0d3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHTW7H%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvIm2sY386bKvASkoVMGxcE8QY%2BWB7szhZm%2FB2OOilNAiBFzk9z%2FPGNfnct6VQmHzboGJHiIkH3X3Zz97h%2BJwUN2SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJHw%2FuvuXxRetSMyKtwDXzE82%2B9Jg%2B5hWgpT5XXxQGX%2Fv%2FI07YsuQAS9Ydq%2BmwJZN8wPov7pHqQ%2BiCBtbm3XPcyYmjmvu8Cb3hHSkLsfKIUfx3C3s1W5rpm7nMqIddikzV4CmOU5ozjPVelMceO1eQvfNICsW61v8BbNFEtALGcIqJJI4uNSUYrIMySZBoDgd8jajIO1DPdSm5o7JAB792qiWEREfXo95iUcTFIBl0x09vA2XD915bo9Pi3am7pww38JoAtcCjmqY%2BtYpEvHgdFZB1u%2BKnA1hjyaFF88gM9nPnPq9BlZXUGH7U%2Bbs2paa5nk%2BS2%2F9JItU1Snry74dWbbDzdiseTK%2BgRYwd0gypftGJyIDeVE0AYm02niyhRQAjCDN7IClp0HlmglEOTEQ0VpN%2B%2F3VhQ0%2FhSQyhzylhzAfzFUXCb%2FGOtqkh8kl3JFufKRy84TaSDYDOqbGx8GoUr%2Fm6niApQfUMwEmjOSKxhJKGok9xlyKshPKSVugTJf5i0fYysdpSjH89ZSCMss%2FNoA2CdRIuc2MkzlGQvlMR0CFS2jNVqfqYesw39pumPkKjGfV4ptPLxRclTxKNZ3nc0FOPpVDqk79U79AzpiqGZ4JZJmQMz83wkC6OPOqMw%2BJ5qLlo9kUlmn%2FNYww5OxwQY6pgE0JliHjSzUJeG4hWN%2Fdvn06M32WyHkh8FApRRecXBBkGWR5J8phS3ibAH7J22KuSZQOFVgz0czJzc5eKVSauIqa1MQt9Cgomif5Q7rzzqzCaG0SppOKqGmfyUQjv0U0gnaAM9zg3r4Brca26OB7FwQd21wS8tPa5e5ipiKDTcAUWuLVdVjry5sTtEsVZgxgdZz4BkweobQ%2FVEUWPrmQZEXA4FhKbFW&X-Amz-Signature=ed5fc1b5faadd6c1d6901b9f5008e1ca4aab70a2a7f51fc4d84097da9b9c84c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
