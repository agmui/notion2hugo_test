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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITTYS2Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC9T%2F009Ya30sFEAvPWBi7Ol6i0wrFKkblZXQjQcs2RcAiEA7fBhzdy6e8f4S%2Bott%2FVmxUu0fEXpf8wpDOHc1rb3YlQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvJS29HPcww09un0CrcA1ed2OHMfdgZP8JehNxJjOwiYBsqevkqzhNwPtz92tpgGiX1KOpOIMKP3aOesC%2FHypo7JMrUrYzOJTXBSp5vBlB0PgTppdBY4nhLKUZfw0JLuI5EzqtOpbBBcn7Ejp3wJCcx80Dn7yzR50apg84kFjBqKnHyen6LB%2BoDaJcjM3nt4oxTcbwEr66rTlqggmXigj%2BereariEPCFCDIn71ABQ77jcW2zKDTXuleAH2hJlMuwaKWKX6mhii5pi7THr%2FbJtW4edxsczk4%2BcFo0nHLuTs0B5HoTGy6E6Yfupp0i1TLgjb3vYKpABz1XWnMEqZyG0dyqVMDW6429ob%2Ba6EM9XQ8LrOTI5O9wifPKC3idUOBrFoOJoQUcMcN9w81EtwcvAGUkjw26eGKiMfXgZmBop4vDNjc%2B0NoIiAq%2FF5xnapE3iojPMXaz6REy6ssUln3f0TDrfYXy8t941K2pf%2FgMRCzT6vvSNRcETqB433g2fuqLvzIkvrXAFe%2F%2FCsSMU3VGaQyha2rtPa36iUk6Fklf2xpDzGSLZcrcvwypHRejTvTtfGfT2EcIaykJN0pN1XMnDCQMOJ9zS%2BEtTWjFO4hDv94ge%2BYONNaotYCyi7%2BOqJh4C1o0dE83endxl2pMPea070GOqUB%2BbzfRhnR7Xy0j2bImNvUcpo3Z7piYsqTP%2FwF4LpCv%2BVMs7hdWuFRLcFzGkTIebro0K8T3AFtckyDElgt%2FmiF3D%2BUjhxRTDqT4du%2BR5ArQEn1WLWDBvqajMbEhhhqYI5MHuDoXNy8qtvaakgyBEHkt0aFHgslOqKDsWEvBp8zdeoCRllhvuMIvC94ynMEZlDerOIgEp4gHOwav3uEI7l6vNkXoJLO&X-Amz-Signature=8ead755d7974a4d2e15e945556d46c10ed547a6433a7aa6a88868f173135db8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITTYS2Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC9T%2F009Ya30sFEAvPWBi7Ol6i0wrFKkblZXQjQcs2RcAiEA7fBhzdy6e8f4S%2Bott%2FVmxUu0fEXpf8wpDOHc1rb3YlQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvJS29HPcww09un0CrcA1ed2OHMfdgZP8JehNxJjOwiYBsqevkqzhNwPtz92tpgGiX1KOpOIMKP3aOesC%2FHypo7JMrUrYzOJTXBSp5vBlB0PgTppdBY4nhLKUZfw0JLuI5EzqtOpbBBcn7Ejp3wJCcx80Dn7yzR50apg84kFjBqKnHyen6LB%2BoDaJcjM3nt4oxTcbwEr66rTlqggmXigj%2BereariEPCFCDIn71ABQ77jcW2zKDTXuleAH2hJlMuwaKWKX6mhii5pi7THr%2FbJtW4edxsczk4%2BcFo0nHLuTs0B5HoTGy6E6Yfupp0i1TLgjb3vYKpABz1XWnMEqZyG0dyqVMDW6429ob%2Ba6EM9XQ8LrOTI5O9wifPKC3idUOBrFoOJoQUcMcN9w81EtwcvAGUkjw26eGKiMfXgZmBop4vDNjc%2B0NoIiAq%2FF5xnapE3iojPMXaz6REy6ssUln3f0TDrfYXy8t941K2pf%2FgMRCzT6vvSNRcETqB433g2fuqLvzIkvrXAFe%2F%2FCsSMU3VGaQyha2rtPa36iUk6Fklf2xpDzGSLZcrcvwypHRejTvTtfGfT2EcIaykJN0pN1XMnDCQMOJ9zS%2BEtTWjFO4hDv94ge%2BYONNaotYCyi7%2BOqJh4C1o0dE83endxl2pMPea070GOqUB%2BbzfRhnR7Xy0j2bImNvUcpo3Z7piYsqTP%2FwF4LpCv%2BVMs7hdWuFRLcFzGkTIebro0K8T3AFtckyDElgt%2FmiF3D%2BUjhxRTDqT4du%2BR5ArQEn1WLWDBvqajMbEhhhqYI5MHuDoXNy8qtvaakgyBEHkt0aFHgslOqKDsWEvBp8zdeoCRllhvuMIvC94ynMEZlDerOIgEp4gHOwav3uEI7l6vNkXoJLO&X-Amz-Signature=9477c881ff8abf6c038b534faa1151b92e6384fa3c670f428fc737ad2da166f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
