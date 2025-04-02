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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=38076ac377aaf30d07e8290a31dc248d6d9429067c4fb4e8945223b26eb8a795&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7AGKNK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BhoTluF97WKg6KoIU6cbX5wPVaRgmzV7bma5rBkL3TAiAqEpn2pu2DxGubPF7Q6kcrvD%2BS4krJFKlLAnu6ptZ7xyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX0L7AePQDb8p81eKtwDm4d8aepq3vlsY%2B7ODP8rYxYQTlJv9BxzblE%2FW%2Fdx2c%2B2O3f2CrjpPKK5foCuM6K7Nn0SXVuY9BshC5fvz%2BpsfyBp6sRvZtTiRpLzJCJY3VQgXXCnJo3N%2BOCY%2BSZ17xrks8%2FkQsyxw7ieLaY7xUMvWT2o8DmB%2BMXY7HgMVhDU9x8PX1krJ%2FQcCfO5YYYOWKkTnNlhXg40MRD4dI2Oodrn3Rug45uvnItouZvgwH8bFVYga%2BT9eND8H%2BfU39qmN3TTxysrQkpm5RWZ7MpsgwvFsv%2F2tLuiatXUs0HIRt71Q4bBsZ7xEQpP7l2P5QEhiZD%2BiWiLFF902b%2FgFqWZVg9OPRsChMcYo5ozZ1lWg2B%2B2Kjv%2BhaUU3s0NR9hZ6VDV9LEsyA6bQcfbP86lLGlc%2FHyyjGd6CaNwmX68VOPUmIUT%2BXMEqTwjNsHq7lQ0x%2FTt%2BfxFpb%2Bs4R9vMlWbsylMwYfmkmcTEZb6JilYZj2Omdia1bLYmT6NKt9T%2FTmQh%2BPQ19tlCLq%2BNsCrAwOHKRlqF%2F4qA%2B%2BOvxJqlemlWGwD9dE00EaqovipGPXUDyoQmoheNxihphz56ixcSskt26rH7NyAFLc8PzmBSKmjdKqdRbfBh6k9h0AF%2Bu%2FYh5Ne3gwx4qzvwY6pgGsYdRlVnKHvgqXAQdltSzKtNgpSQrst0uFK9SBN4oRPSoUfWT9jvj%2FZ9BHteygJa2FzbI%2Bww637mM3N2rCphdF%2B7Ai7rY01RLmAsE4JDiYNKvL3fKFLvpDFGbrw52o09wSCCnmJ2S%2BjImtRTGBWMySBSdfudHn1HsmT5A0TX%2FaUKxoQycjVXkV%2FwmeWYsNpYFSQiTvyAek3MqWK%2FJA5THQNkflNKWh&X-Amz-Signature=5913b5d04f2b93111829e943a0728a1dc569d514f8da8f4a7d2978d7af56e022&X-Amz-SignedHeaders=host&x-id=GetObject)

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
