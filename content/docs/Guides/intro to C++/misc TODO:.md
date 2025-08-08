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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7QPHM6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEfsnSBNZXlpJi9LpTwVNh2b2C35UGCgzx3AuAOYjaPDAiEA7LCJxhs%2FIIwLfxB1MVSAOLqpHy5lZIT4n8VlrZzP960qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQjH9WYU4eZ7vvuiircA7JjwYQtpTOIIE%2Fc6rVXp878KQM72dePc5SdUe2YtidpFskal2%2BTK4JGd8THfieHYhinTC9ssNU7FJXu71BtgbCfzP5higZePJwfzxw6Wp4PKQHf1mSrer1dfTEXnkKyKUXd9Gm10SX9r3jppv8q3kxw%2FoCnKzuOGe5i5RWW2JPfAcQpIGkNPmm26xAPfWJgK4PIJy7UkTFcDXqFFAWrjuqf5VdWqTEp7cimmUgKKFh0jhZ2vBm5UgrMosXLAGRBygjwg7YstrfXPRY12Jb%2FYASy%2BYgEQ9htfP5YV6lVunlZ0E5w6vXMCx5l8atIZhrRhTM4qWUhb218IHXTp%2B0cILqtJ0GYBNrYF6fHYkmRu3Q%2B2MsK2kqxr7gTk1BiGE68XFhCvOJdce2P9E68SPUwavaVAwi7Wq%2B4EQwBiTv%2FiPinLtmPLNXV2AVpLLHtmuJLZ5HWqIOncse0ahd70Ton6pXF31TQ2cnJTui6dBTS2otw8KrQAxPjMY11Rx%2FdfP3U5ln7I00vxyFnsRlUe4aGK2%2BvuzCxt8ohfv1cXNYkrF6yeoTGANCKC3%2B2B7cMTzxq2CsEn%2FxW3g3hkbhiEwJTUF%2Ba4AYMFGeub26WSiofzmxnmtjYVSBDrENi4nhNMI6318QGOqUBXG5CosP9Z8jKgAEQc59C1ivuYjt2K2m3kFiwX4FnBqmvL%2B00V0tXkmjMVTiaUt5wZrEKYlm8cB6SW71u7KqSSAnmTKum6eF8IU8rMzKKP3BRFe3VRm5cpmuPCB1dagQhlFLMSOtdfdY%2FEQRqG9ONIurfrWvGvRwpSeNHKL%2BOLrMKSQSgfCyY0S2jM%2FML8fbMXgZhJcPgYJyOd74CSYhQD1jsOrOY&X-Amz-Signature=119e00d4ffbc0162c666f442b4fe1b4ecd7947ce7bdc67abf6eee258bb04aed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7QPHM6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEfsnSBNZXlpJi9LpTwVNh2b2C35UGCgzx3AuAOYjaPDAiEA7LCJxhs%2FIIwLfxB1MVSAOLqpHy5lZIT4n8VlrZzP960qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQjH9WYU4eZ7vvuiircA7JjwYQtpTOIIE%2Fc6rVXp878KQM72dePc5SdUe2YtidpFskal2%2BTK4JGd8THfieHYhinTC9ssNU7FJXu71BtgbCfzP5higZePJwfzxw6Wp4PKQHf1mSrer1dfTEXnkKyKUXd9Gm10SX9r3jppv8q3kxw%2FoCnKzuOGe5i5RWW2JPfAcQpIGkNPmm26xAPfWJgK4PIJy7UkTFcDXqFFAWrjuqf5VdWqTEp7cimmUgKKFh0jhZ2vBm5UgrMosXLAGRBygjwg7YstrfXPRY12Jb%2FYASy%2BYgEQ9htfP5YV6lVunlZ0E5w6vXMCx5l8atIZhrRhTM4qWUhb218IHXTp%2B0cILqtJ0GYBNrYF6fHYkmRu3Q%2B2MsK2kqxr7gTk1BiGE68XFhCvOJdce2P9E68SPUwavaVAwi7Wq%2B4EQwBiTv%2FiPinLtmPLNXV2AVpLLHtmuJLZ5HWqIOncse0ahd70Ton6pXF31TQ2cnJTui6dBTS2otw8KrQAxPjMY11Rx%2FdfP3U5ln7I00vxyFnsRlUe4aGK2%2BvuzCxt8ohfv1cXNYkrF6yeoTGANCKC3%2B2B7cMTzxq2CsEn%2FxW3g3hkbhiEwJTUF%2Ba4AYMFGeub26WSiofzmxnmtjYVSBDrENi4nhNMI6318QGOqUBXG5CosP9Z8jKgAEQc59C1ivuYjt2K2m3kFiwX4FnBqmvL%2B00V0tXkmjMVTiaUt5wZrEKYlm8cB6SW71u7KqSSAnmTKum6eF8IU8rMzKKP3BRFe3VRm5cpmuPCB1dagQhlFLMSOtdfdY%2FEQRqG9ONIurfrWvGvRwpSeNHKL%2BOLrMKSQSgfCyY0S2jM%2FML8fbMXgZhJcPgYJyOd74CSYhQD1jsOrOY&X-Amz-Signature=56e5f4dd127b67b7b604ea2b2610274b5d6c84ba524848f79d508b7310158dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
