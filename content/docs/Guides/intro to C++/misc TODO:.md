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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIPV3YD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTfY7svsWqZhN%2FhZroio6tU29P%2BL3s1%2B%2Bn6ea8x%2Ftk6AIhALrjcR%2F2nVJW5ER3ztHzlH%2Bv%2BI8zlE59okAs%2FElrrFt1KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDBb9enrDeD9MneT4q3AOQhaW4DqhywtT0Diq917MPexmcdzR0xvgCAv7CZ8qhwl2dK93xcmd46BISPdeU9etuIDO8syC8ZQbLFykLIi4zXgqdPKLXHUc3mpw9VJGbfCv2RpqHWMnSsCVYs3jhEtLrFx9yU2i%2Bd%2BpgYkWcPM5%2BbVSZ5hy8F24k97KvfZP3KEY1rEOKBAlEEaqbd8az7KZ5K%2FefV6IoTFHLGELovnMg0KjhK7O8ktLO9O0sfa7OINpyvb4f7cEXvqP6ohavmgSadS1fEeDg2CZeYKVPWV8M82pn5zl1z25zawzo5IRExbj3cSKCAQRUKovM%2B0JBnBp%2FbsuEfSk7uoK%2BokBdlpxca27bNBxWPyVR%2BuABtvddCOOGKnvy%2FvnGG5o0tpydTGWWWfAHAbVGsfUj87ScYfCxAuR1r4qZtWQ%2B48nZ%2Fb6Phak9k9gHHVXTJ%2FEJBiCF0GyF0hsjH5PyH%2FsdO%2FQSktBsWaWSpvs16kWx4vaIc5XE5FfjdrDVugV9XiqMAoxtwHixj75ZEv7X7nXwf%2Fhk8V%2FU6l5nvlDAvpGO6r2In2Wn2eUbKO4p6M85cfxmvl3una%2FZuM8nkdzTfEWOIydZTcONyNt1W8GwRwOiQ5K0Hn%2FEpPvGFLMa0hYs1mqtnjCo%2BoXDBjqkARb6MsarmLkC9s9jL8jPfkXmO2y35KTzehtKKihtSWbE%2Bm%2FAuRETPPo6AqLoAALQiDkbg689mwaOK56MK%2FUUO3Tn2nXPzdu0hisfXAv9qreJuPdlWGIwKI%2BoNAfL%2FCrrf%2BxrHcd8%2FnMJipBK3vSSyyGtlbIWPimbaKLDHqZR1WG8hxdS9vapzipVmg7CYQ81yN55XMBqvjORCAwDJDyHi0SvLhxC&X-Amz-Signature=d758d38356f0a1e129231924036ce24530159f797648278c8974dfa4dc499de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIPV3YD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTfY7svsWqZhN%2FhZroio6tU29P%2BL3s1%2B%2Bn6ea8x%2Ftk6AIhALrjcR%2F2nVJW5ER3ztHzlH%2Bv%2BI8zlE59okAs%2FElrrFt1KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDBb9enrDeD9MneT4q3AOQhaW4DqhywtT0Diq917MPexmcdzR0xvgCAv7CZ8qhwl2dK93xcmd46BISPdeU9etuIDO8syC8ZQbLFykLIi4zXgqdPKLXHUc3mpw9VJGbfCv2RpqHWMnSsCVYs3jhEtLrFx9yU2i%2Bd%2BpgYkWcPM5%2BbVSZ5hy8F24k97KvfZP3KEY1rEOKBAlEEaqbd8az7KZ5K%2FefV6IoTFHLGELovnMg0KjhK7O8ktLO9O0sfa7OINpyvb4f7cEXvqP6ohavmgSadS1fEeDg2CZeYKVPWV8M82pn5zl1z25zawzo5IRExbj3cSKCAQRUKovM%2B0JBnBp%2FbsuEfSk7uoK%2BokBdlpxca27bNBxWPyVR%2BuABtvddCOOGKnvy%2FvnGG5o0tpydTGWWWfAHAbVGsfUj87ScYfCxAuR1r4qZtWQ%2B48nZ%2Fb6Phak9k9gHHVXTJ%2FEJBiCF0GyF0hsjH5PyH%2FsdO%2FQSktBsWaWSpvs16kWx4vaIc5XE5FfjdrDVugV9XiqMAoxtwHixj75ZEv7X7nXwf%2Fhk8V%2FU6l5nvlDAvpGO6r2In2Wn2eUbKO4p6M85cfxmvl3una%2FZuM8nkdzTfEWOIydZTcONyNt1W8GwRwOiQ5K0Hn%2FEpPvGFLMa0hYs1mqtnjCo%2BoXDBjqkARb6MsarmLkC9s9jL8jPfkXmO2y35KTzehtKKihtSWbE%2Bm%2FAuRETPPo6AqLoAALQiDkbg689mwaOK56MK%2FUUO3Tn2nXPzdu0hisfXAv9qreJuPdlWGIwKI%2BoNAfL%2FCrrf%2BxrHcd8%2FnMJipBK3vSSyyGtlbIWPimbaKLDHqZR1WG8hxdS9vapzipVmg7CYQ81yN55XMBqvjORCAwDJDyHi0SvLhxC&X-Amz-Signature=993cdd1a87428d29ebc9aa95ec90b01f3ab06df65b6acbdd246309936e7223db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
