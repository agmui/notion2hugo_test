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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YUFJ76L%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsHpn9hir65GbN9v1Fg0TtF7TOzKQM6B9Go1Qkba0CAiEAhR0aztvSeYGb%2F6WykCM4HsGAg%2FaEY0swqViJ276kGNsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvfxZtJqD8AEtY9iSrcA0jnzTxunUgYfLzIjs%2FU%2FPH35ukozUI59%2FHAhX%2BNiMi05q9eJHXk0f9pv1fQG8mYFY4QamLIt2ohmXHouqkXXg%2B%2Fmp9WkiNAcblLx8CXUC8NRnMB3sADW3x3NF2v4Bu0E2vdIxv0rWkGaT2DsbLQSqnTSIDBYPLUnW0X5PVPd9WEz8nHbXqLjmb2mwrw0lw48EN%2B%2F75ZChAaJs%2BlOMwvgYYcmy65rCSHBrkPjRZQM8FMT%2Bah3O4kU95RIFHexKbJP07Gou7pJlaSEuHVRB1GWWmMMRe5Oy76mnhxkBfVqtTVnmR7D13gHkCvlex5THGemLY743HJJ3coqRRjydAhyu%2B6J8hB0l%2F6MhMFlHw6Tg6Vdv7mRg4rV8UxbnJwJuVkrxJur7sWxXR81VBh0sQYdmV5fYRKA1scGbY8IuFftaPvos1PfaUvP0J9%2FUNCji6T3UKOHVNv10Fje7FxX7JMcy3GqSDJ9zYk1TkJgoIUGDeP8EPI%2B5Xm283qX9Eww35XBX3XdapF%2FkH5b%2F4lmngCZ7BWLRIvF3TxyKacl2IoKwhIiSO3hHyOcoxxDWHCZ4BmxMZh0Vsccn7ZRXxGwcn7sHQNyRZ2uSI0DZyPUqbu3eek5NziL%2BcVA%2BR5zwXRMOeQ8r8GOqUB6YatKwWpexBVX%2F0ShN4Kc6cl2ajFb7nWvoMQwRLpvOwa%2F5ZUmvSds6SA6%2FEAT%2FU0APHC1rMJd14xWUiizhuQCPi0U%2FfG24rb63xmQ2PKAFIk2PrtGCG7ZFdwqbm4%2FMwbDZm540h0%2FcbUp9bvhZIHuov%2FHrUjATwjcuTC%2FeS4Qb%2FgYKK6QIhs8RX8CF1zxYPrHNOJM7f7TS8VoDunOwKFJU2aja4D&X-Amz-Signature=ce38c85661874bd34f1edd3d129d9ba96aac33880edbc068dc940fc46ab7c2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YUFJ76L%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsHpn9hir65GbN9v1Fg0TtF7TOzKQM6B9Go1Qkba0CAiEAhR0aztvSeYGb%2F6WykCM4HsGAg%2FaEY0swqViJ276kGNsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvfxZtJqD8AEtY9iSrcA0jnzTxunUgYfLzIjs%2FU%2FPH35ukozUI59%2FHAhX%2BNiMi05q9eJHXk0f9pv1fQG8mYFY4QamLIt2ohmXHouqkXXg%2B%2Fmp9WkiNAcblLx8CXUC8NRnMB3sADW3x3NF2v4Bu0E2vdIxv0rWkGaT2DsbLQSqnTSIDBYPLUnW0X5PVPd9WEz8nHbXqLjmb2mwrw0lw48EN%2B%2F75ZChAaJs%2BlOMwvgYYcmy65rCSHBrkPjRZQM8FMT%2Bah3O4kU95RIFHexKbJP07Gou7pJlaSEuHVRB1GWWmMMRe5Oy76mnhxkBfVqtTVnmR7D13gHkCvlex5THGemLY743HJJ3coqRRjydAhyu%2B6J8hB0l%2F6MhMFlHw6Tg6Vdv7mRg4rV8UxbnJwJuVkrxJur7sWxXR81VBh0sQYdmV5fYRKA1scGbY8IuFftaPvos1PfaUvP0J9%2FUNCji6T3UKOHVNv10Fje7FxX7JMcy3GqSDJ9zYk1TkJgoIUGDeP8EPI%2B5Xm283qX9Eww35XBX3XdapF%2FkH5b%2F4lmngCZ7BWLRIvF3TxyKacl2IoKwhIiSO3hHyOcoxxDWHCZ4BmxMZh0Vsccn7ZRXxGwcn7sHQNyRZ2uSI0DZyPUqbu3eek5NziL%2BcVA%2BR5zwXRMOeQ8r8GOqUB6YatKwWpexBVX%2F0ShN4Kc6cl2ajFb7nWvoMQwRLpvOwa%2F5ZUmvSds6SA6%2FEAT%2FU0APHC1rMJd14xWUiizhuQCPi0U%2FfG24rb63xmQ2PKAFIk2PrtGCG7ZFdwqbm4%2FMwbDZm540h0%2FcbUp9bvhZIHuov%2FHrUjATwjcuTC%2FeS4Qb%2FgYKK6QIhs8RX8CF1zxYPrHNOJM7f7TS8VoDunOwKFJU2aja4D&X-Amz-Signature=ccdeef93680ac293eee99491c3068c3cc83a1e7f8d3b56b787f8567ca31e94d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
